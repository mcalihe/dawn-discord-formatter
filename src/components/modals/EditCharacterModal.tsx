import { Dialog, Switch } from '@headlessui/react'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Class } from '../../data/Class'
import { DungeonId, Dungeons } from '../../data/Dungeons'
import { Role } from '../../data/Roles'
import { Spec, SPECS_BY_CLASS } from '../../data/Specs'
import { Character } from '../../models/Character'
import { FloatingInput } from '../FloatingInput'
import { FloatingSelect } from '../FloatingSelect'
import { SpecMultiSelect } from '../SpecMultiSelect'

interface NewCharacterModalProps {
  open: boolean
  onClose: () => void
  onSave: (data: Character) => void
  character?: Character
  mode: 'create' | 'edit'
}

const formatLabel = (value: string) =>
  value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

const CLASS_OPTIONS = Object.entries(Class).map(([, value]) => ({
  value,
  label: formatLabel(value),
}))

export const EditCharacterModal = ({
  open,
  onClose,
  onSave,
  character,
  mode = 'edit',
}: NewCharacterModalProps) => {
  const { t } = useTranslation()

  const [name, setName] = useState(character?.name ?? '')
  const [realm, setRealm] = useState(character?.realm ?? '')
  const [charClass, setCharClass] = useState<Class>(character?.class ?? Class.Hunter)
  const [specs, setSpecs] = useState<Spec[]>(character?.specs ?? [Spec.BeastMastery])
  const [ilvl, setIlvl] = useState(character?.iLvl ?? 680)
  const [keystoneLevel, setKeystoneLevel] = useState(character?.keystone.level ?? 12)
  const [keystoneDungeon, setKeystoneDungeon] = useState<DungeonId>(
    character?.keystone.dungeon ?? DungeonId.DFC
  )
  const [active, setActive] = useState(character?.active !== undefined ? character.active : true)

  const resetData = () => {
    setName(character?.name ?? '')
    setRealm(character?.realm ?? '')
    setCharClass(character?.class ?? Class.Hunter)
    setSpecs(character?.specs ?? [Spec.BeastMastery])
    setIlvl(character?.iLvl ?? 680)
    setKeystoneLevel(character?.keystone.level ?? 12)
    setKeystoneDungeon(character?.keystone.dungeon ?? DungeonId.DFC)
    setActive(true)
  }

  const handleClose = (reset: boolean = false) => {
    if (reset) {
      resetData()
    }
    onClose()
  }

  const handleClassChange = (value: string) => {
    setCharClass(value as Class)
    setSpecs([])
  }

  const handleSave = () => {
    const roles = specs
      .map((s) => SPECS_BY_CLASS[charClass as Class].find((entry) => entry.spec === s)?.role)
      .filter(Boolean) as Role[]

    onSave({
      name,
      realm,
      class: charClass,
      specs: specs,
      roles: roles,
      iLvl: ilvl,
      source: 'manual',
      active,
      keystone: { level: keystoneLevel, dungeon: keystoneDungeon },
    })
    handleClose(mode == 'create')
  }

  return (
    <Dialog open={open} onClose={() => handleClose(true)} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-zinc-900 text-white rounded-xl p-6 space-y-4 shadow-xl">
          <Dialog.Title className="text-lg font-semibold">
            <div className="flex justify-between items-center">
              {t('modal.newCharacter.title')}
              <button
                onClick={() => handleClose(true)}
                className="text-zinc-400 hover:text-white transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </Dialog.Title>

          <div className="flex gap-4">
            <FloatingInput
              id="char-name"
              label={t('modal.newCharacter.name.label')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
            <FloatingInput
              id="char-realm"
              label={t('modal.newCharacter.realm.label')}
              value={realm}
              onChange={(e) => setRealm(e.target.value)}
              required={true}
            />
          </div>

          <FloatingSelect
            id="char-class"
            label={t('modal.newCharacter.class.label')}
            value={charClass}
            onChange={(e) => handleClassChange(e.target.value)}
            options={CLASS_OPTIONS}
            required={true}
          />

          <SpecMultiSelect charClass={charClass} specs={specs} setSpecs={setSpecs} />
          <FloatingInput
            id="char-ilvl"
            label={t('modal.newCharacter.ilvl.label')}
            value={ilvl}
            type="number"
            onChange={(e) => setIlvl(parseInt(e.target.value))}
            required={true}
          />

          <div className="flex gap-4">
            <FloatingInput
              id="keystone-level"
              label={t('modal.newCharacter.keystone.level')}
              type="number"
              value={keystoneLevel}
              className={'flex-1'}
              onChange={(e) => setKeystoneLevel(Number(e.target.value))}
              required={true}
            />
            <FloatingSelect
              id="keystone-dungeon"
              label={t('modal.newCharacter.keystone.dungeon')}
              value={keystoneDungeon}
              className={'flex-4'}
              onChange={(e) => setKeystoneDungeon(e.target.value as DungeonId)}
              options={Dungeons.map((d) => ({ value: d.id, label: d.name }))}
              required={true}
            />
          </div>

          <Switch.Group>
            <div className="flex items-center gap-3">
              <Switch
                checked={active}
                onChange={setActive}
                className={`${
                  active ? 'bg-blue-600' : 'bg-zinc-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    active ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <Switch.Label className="text-sm text-white">
                {t('modal.newCharacter.active')}
              </Switch.Label>
            </div>
          </Switch.Group>

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => handleClose(true)}
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              {t('modal.cancel')}
            </button>
            <button
              onClick={handleSave}
              disabled={
                !name.trim() ||
                !realm.trim() ||
                !charClass ||
                specs.length === 0 ||
                !keystoneLevel ||
                !keystoneDungeon ||
                !ilvl
              }
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
