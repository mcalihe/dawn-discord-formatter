import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import { Clipboard, ClipboardCheck, Download, Upload, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CURRENT_TEAM, TEAMS } from '../../data/StorageKeys'
import { StoredTeamsData } from '../../services/DataStorageService'

interface ImportExportButtonsProps {
  storedTeamsData: StoredTeamsData
  onImport: (json: string) => void
  className?: string
}
type Mode = 'export' | 'import'
export const ImportExportButtons = ({
  storedTeamsData,
  onImport,
  className,
}: ImportExportButtonsProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('export')
  const [value, setValue] = useState('') // holds the text for the dialog
  const [copied, setCopied] = useState(false)

  const prettyJson = useMemo(
    () =>
      JSON.stringify(
        {
          [TEAMS]: storedTeamsData.teams,
          [CURRENT_TEAM]: storedTeamsData.currentTeam,
        },
        null,
        2
      ),
    [storedTeamsData]
  )

  const openExport = () => {
    setMode('export')
    setValue(prettyJson)
    setCopied(false)
    setOpen(true)
  }
  const openImport = () => {
    setMode('import')
    setValue('')
    setCopied(false)
    setOpen(true)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }

  const handleConfirm = () => {
    if (mode === 'import') {
      onImport(value)
    }
    setOpen(false)
  }

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      {/* Export */}
      <button
        onClick={openExport}
        title={t('tooltip.export.json', 'Export JSON')}
        className="card-button rounded-xl border border-zinc-700 bg-zinc-800/60 text-zinc-200
                   hover:border-blue-400 hover:bg-blue-500/20
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   transition-colors duration-150 cursor-pointer"
        aria-label={t('tooltip.export.json', 'Export JSON')}
      >
        <Download className="w-4 h-4" />
      </button>

      {/* Import */}
      <button
        onClick={openImport}
        title={t('tooltip.import.json', 'Import JSON')}
        className="card-button rounded-xl border border-zinc-700 bg-zinc-800/60 text-zinc-200
                   hover:border-blue-400 hover:bg-blue-500/20
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   transition-colors duration-150 cursor-pointer"
        aria-label={t('tooltip.import.json', 'Import JSON')}
      >
        <Upload className="w-4 h-4" />
      </button>

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-xl bg-zinc-900 text-white rounded-xl p-4 shadow-xl border border-zinc-800">
            <div className="flex items-center justify-between mb-3">
              <Dialog.Title className="text-base font-semibold">
                {mode === 'export'
                  ? t('modal.export.title', 'Export data (JSON)')
                  : t('modal.import.title', 'Import data (JSON)')}
              </Dialog.Title>
              <button
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-white transition cursor-pointer"
                aria-label={t('modal.cancel', 'Cancel')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="rounded-lg bg-zinc-900/60 border border-zinc-700 shadow-sm overflow-hidden"
              role="region"
              aria-label={mode === 'export' ? 'Export JSON' : 'Import JSON'}
            >
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700">
                <span className="text-xs text-zinc-400">
                  {mode === 'export'
                    ? t('modal.export.subtitle', 'Copy this JSON and share or store it.')
                    : t('modal.import.subtitle', 'Paste your JSON below and confirm.')}
                </span>

                {mode == 'export' && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-zinc-700 bg-zinc-800
                             hover:border-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer"
                    title={copied ? t('copied', 'Copied') : t('copy', 'Copy')}
                  >
                    {copied ? (
                      <ClipboardCheck className="w-3.5 h-3.5" />
                    ) : (
                      <Clipboard className="w-3.5 h-3.5" />
                    )}
                    <span>{copied ? t('copied', 'Copied') : t('copy', 'Copy')}</span>
                  </button>
                )}
              </div>

              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                readOnly={mode === 'export'}
                spellCheck={false}
                className={clsx(
                  'w-full h-64 p-3 font-mono text-sm outline-none resize-none',
                  'bg-transparent text-zinc-200'
                )}
                placeholder={t('modal.import.placeholder', '{ paste JSON here }')}
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              {mode === 'import' && (
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm text-zinc-400 hover:text-white transition"
                >
                  {t('modal.cancel', 'Cancel')}
                </button>
              )}
              <button
                onClick={handleConfirm}
                disabled={mode === 'import' && !value.trim()}
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {mode === 'export'
                  ? t('modal.close', 'Close')
                  : t('modal.import.confirm', 'Import')}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
