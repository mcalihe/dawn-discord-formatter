import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { DUNGEONS } from '../../data/dungeons'
import { Character } from '../../models/Character'
import { FloatingInput } from '../FloatingInput'
import { FloatingSelect } from '../FloatingSelect'

interface NewCharacterModalProps {
  open: boolean
  onClose: () => void
  onSave: (data: Character) => void
}

export const NewCharacterModal = ({ open, onClose, onSave }: NewCharacterModalProps) => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [realm, setRealm] = useState('')
  const [spec, setSpec] = useState('')
  const [charClass, setCharClass] = useState('')
  const [role, setRole] = useState('')
  const [source, setSource] = useState<'manual' | 'raiderio'>('manual')
  const [ilvl, setIlvl] = useState('')
  const [keystoneLevel, setKeystoneLevel] = useState(0)
  const [keystoneDungeon, setKeystoneDungeon] = useState('AV')
  const [active, setActive] = useState(true)
  const CLASS_OPTIONS = [
    { value: 'death-knight', label: 'Death Knight' },
    { value: 'demon-hunter', label: 'Demon Hunter' },
    { value: 'druid', label: 'Druid' },
    { value: 'evoker', label: 'Evoker' },
    { value: 'hunter', label: 'Hunter' },
    { value: 'mage', label: 'Mage' },
    { value: 'monk', label: 'Monk' },
    { value: 'paladin', label: 'Paladin' },
    { value: 'priest', label: 'Priest' },
    { value: 'rogue', label: 'Rogue' },
    { value: 'shaman', label: 'Shaman' },
    { value: 'warlock', label: 'Warlock' },
    { value: 'warrior', label: 'Warrior' },
  ]
  const handleSave = () => {
    onSave({
      name,
      realm,
      spec,
      class: charClass,
      role,
      source,
      ilvl: parseInt(ilvl, 10),
      keystone: { level: keystoneLevel, dungeon: keystoneDungeon },
      active,
    })
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-zinc-900 text-white rounded-xl p-6 space-y-4 shadow-xl">
          <Dialog.Title className="text-lg font-semibold">
            <div className={'flex flex-row justify-between'}>
              {t('modal.newCharacter.title')}

              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </Dialog.Title>

          <FloatingInput
            id="char-name"
            label={t('modal.newCharacter.name.label')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FloatingInput
            id="char-spec"
            label={t('modal.newCharacter.spec.label')}
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
          />
          <FloatingInput
            id="char-class"
            label={t('modal.newCharacter.class.label')}
            value={charClass}
            onChange={(e) => setCharClass(e.target.value)}
          />
          <FloatingInput
            id="char-role"
            label={t('modal.newCharacter.role.label')}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <FloatingInput
            id="char-ilvl"
            label={t('modal.newCharacter.ilvl.label')}
            value={ilvl}
            type="number"
            onChange={(e) => setIlvl(e.target.value)}
          />

          <FloatingSelect
            id="role"
            label={t('modal.character.role')}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={CLASS_OPTIONS}
          />

          <div className="flex gap-4">
            <FloatingInput
              id="keystone-level"
              label={t('modal.newCharacter.keystone.level')}
              type="number"
              value={keystoneLevel.toString()}
              onChange={(e) => setKeystoneLevel(Number(e.target.value))}
            />
            <div className="flex-1">
              <label className="text-sm text-zinc-400 mb-1 block">
                {t('modal.newCharacter.keystone.dungeon')}
              </label>
              <select
                className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded focus:outline-none"
                value={keystoneDungeon}
                onChange={(e) => setKeystoneDungeon(e.target.value)}
              >
                {DUNGEONS.map((d) => (
                  <option key={d.short} value={d.short}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={active}
              onChange={() => setActive(!active)}
              id="char-active"
              className="accent-blue-500"
            />
            <label htmlFor="char-active" className="text-sm">
              {t('modal.newCharacter.active')}
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button onClick={onClose} className="text-sm text-zinc-400 hover:text-white transition">
              {t('modal.cancel')}
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded transition"
            >
              {t('modal.save')}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
