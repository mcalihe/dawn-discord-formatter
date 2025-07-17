import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Classes } from '../../data/Classes'
import { DungeonId, Dungeons } from '../../data/Dungeons'
import { CharacterRole } from '../../data/Roles'
import { CharacterSpec, SPECS_BY_CLASS } from '../../data/Specs'
import { Character } from '../../models/Character'
import { FloatingInput } from '../FloatingInput'
import { FloatingSelect } from '../FloatingSelect'
import { SpecMultiSelect } from '../SpecMultiSelect'

interface NewCharacterModalProps {
  open: boolean
  onClose: () => void
  onSave: (data: Character) => void
}

const CLASS_OPTIONS = Object.entries(Classes).map(([key, value]) => ({
  value,
  label: value.replace(/([a-z])([A-Z])/g, '$1 $2'),
}))

export const NewCharacterModal = ({ open, onClose, onSave }: NewCharacterModalProps) => {
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [realm, setRealm] = useState('')
  const [charClass, setCharClass] = useState<Classes | ''>('')
  const [specs, setSpecs] = useState<CharacterSpec[]>([])
  const [roles, setRoles] = useState<CharacterRole[]>([])
  const [ilvl, setIlvl] = useState('')
  const [keystoneLevel, setKeystoneLevel] = useState(12)
  const [keystoneDungeon, setKeystoneDungeon] = useState<DungeonId>(DungeonId.DFC)
  const [active, setActive] = useState(true)

  const reset = () => {
    setName('')
    setRealm('')
    setCharClass('')
    setSpecs([])
    setIlvl('')
    setKeystoneLevel(12)
    setKeystoneDungeon(DungeonId.DFC)
    setActive(true)
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleClassChange = (value: string) => {
    setCharClass(value as Classes)
    setSpecs([])
    setRoles([])
  }

  const handleSave = () => {
    const roles = specs
      .map((s) => SPECS_BY_CLASS[charClass as Classes].find((entry) => entry.spec === s)?.role)
      .filter(Boolean) as CharacterRole[]

    onSave({
      name,
      realm,
      class: charClass,
      spec: specs.join(', '),
      role: roles.join(', ') as CharacterRole,
      ilvl: parseInt(ilvl, 10),
      source: 'manual',
      active,
      keystone: { level: keystoneLevel, dungeon: keystoneDungeon },
    })
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-zinc-900 text-white rounded-xl p-6 space-y-4 shadow-xl">
          <Dialog.Title className="text-lg font-semibold">
            <div className="flex justify-between items-center">
              {t('modal.newCharacter.title')}
              <button
                onClick={handleClose}
                className="text-zinc-400 hover:text-white transition"
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
            id="char-realm"
            label={t('modal.newCharacter.realm.label')}
            value={realm}
            onChange={(e) => setRealm(e.target.value)}
          />

          <FloatingSelect
            id="char-class"
            label={t('modal.newCharacter.class.label')}
            value={charClass}
            onChange={(e) => handleClassChange(e.target.value)}
            options={CLASS_OPTIONS}
          />

          <SpecMultiSelect
            charClass={charClass}
            specs={specs}
            setSpecs={setSpecs}
            setRoles={setRoles}
          />
          <FloatingInput
            id="char-ilvl"
            label={t('modal.newCharacter.ilvl.label')}
            value={ilvl}
            type="number"
            onChange={(e) => setIlvl(e.target.value)}
          />

          <div className="flex gap-4">
            <FloatingInput
              id="keystone-level"
              label={t('modal.newCharacter.keystone.level')}
              type="number"
              value={keystoneLevel.toString()}
              onChange={(e) => setKeystoneLevel(Number(e.target.value))}
            />
            <FloatingSelect
              id="keystone-dungeon"
              label={t('modal.newCharacter.keystone.dungeon')}
              value={keystoneDungeon}
              onChange={(e) => setKeystoneDungeon(e.target.value as DungeonId)}
              options={Dungeons.map((d) => ({ value: d.id, label: d.name }))}
            />
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
            <button
              onClick={handleClose}
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              {t('modal.cancel')}
            </button>
            <button
              onClick={handleSave}
              disabled={!name.trim() || !charClass || specs.length === 0}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('modal.save')}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
