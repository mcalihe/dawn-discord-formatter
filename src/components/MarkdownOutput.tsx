import clsx from 'clsx'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface MarkdownOutputProps {
  value?: string
  className: string
}

export const MarkdownOutput = ({ value, className }: MarkdownOutputProps) => {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  let timeout: NodeJS.Timeout | null = null

  const handleCopy = () => {
    navigator.clipboard.writeText(value || '')
    setCopied(true)
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={clsx('relative', className)}>
      <pre
        className="mt-3 text-sm bg-zinc-900 border border-zinc-700
    rounded-md p-4 font-mono overflow-x-auto whitespace-pre-wrap"
      >
        {value}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 text-zinc-400 hover:text-white transition cursor-pointer"
        title={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        <div className="flex text-sm justify-center items-center p-1 gap-1">
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              {t('copied')}
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              {t('copy')}
            </>
          )}
        </div>
      </button>
    </div>
  )
}
