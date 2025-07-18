import { Dialog, Field, Label, Switch } from '@headlessui/react'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Class, useClassTranslations } from '../../data/Class'
import { DUNGEON_TRANSLATION_KEYS, DungeonId } from '../../data/Dungeons'
import { Faction } from '../../data/Faction'
import { Role } from '../../data/Roles'
import { Spec, SPECS_BY_CLASS } from '../../data/Specs'
import { Character } from '../../models/Character'
import { ArmorMultiSelect } from '../controls/ArmorMultiSelect'
import { FactionRadioGroup } from '../controls/FactionRadioGroup'
import { FloatingInput } from '../controls/FloatingInput'
import { FloatingSelect } from '../controls/FloatingSelect'
import { SpecMultiSelect } from '../controls/SpecMultiSelect'

interface NewCharacterModalProps {
  open: boolean
  onClose: () => void
  onSave: (data: Character) => void
  character?: Character
  mode: 'create' | 'edit'
}

export const EditCharacterModal = ({
  open,
  onClose,
  onSave,
  character,
  mode = 'edit',
}: NewCharacterModalProps) => {
  const { t } = useTranslation()
  const classTranslations = useClassTranslations()

  const CLASS_OPTIONS = Object.entries(classTranslations).map(([key, label]) => ({
    value: key,
    label,
  }))

  const [name, setName] = useState(character?.name ?? '')
  const [realm, setRealm] = useState(character?.realm ?? '')
  const [faction, setFaction] = useState(character?.faction ?? Faction.Horde)
  const [charClass, setCharClass] = useState<Class>(character?.class ?? Class.Hunter)
  const [specs, setSpecs] = useState<Spec[]>(character?.specs ?? [Spec.BeastMastery])
  const [ilvl, setIlvl] = useState(character?.iLvl ?? 680)
  const [keystoneAvailable, setKeystoneAvailable] = useState(
    character?.keystoneAvailable === undefined ? true : character?.keystoneAvailable
  )
  const [keystoneLevel, setKeystoneLevel] = useState(character?.keystone.level ?? 12)
  const [keystoneDungeon, setKeystoneDungeon] = useState<DungeonId>(
    character?.keystone.dungeon ?? DungeonId.DFC
  )
  const [tradeAllArmor, setTradeAllArmor] = useState(character?.tradeAllArmor ?? true)
  const [cantTrade, setCantTrade] = useState(character?.cantTrade ?? [])
  const [rioScore, setRioScore] = useState(character?.rioScore ?? 0)
  const [active, setActive] = useState(character?.active !== undefined ? character.active : true)

  const resetData = () => {
    setName(character?.name ?? '')
    setRealm(character?.realm ?? '')
    setFaction(character?.faction ?? Faction.Horde)
    setCharClass(character?.class ?? Class.Hunter)
    setSpecs(character?.specs ?? [Spec.BeastMastery])
    setIlvl(character?.iLvl ?? 680)
    setKeystoneAvailable(character?.keystoneAvailable ?? true)
    setKeystoneLevel(character?.keystone.level ?? 12)
    setKeystoneDungeon(character?.keystone.dungeon ?? DungeonId.DFC)
    setTradeAllArmor(character?.tradeAllArmor ?? true)
    setCantTrade(character?.cantTrade ?? [])
    setRioScore(character?.rioScore ?? 0)
    setActive(true)
  }

  useEffect(() => {
    if (open) {
      resetData()
    }
  }, [open])

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
      faction: faction,
      rioScore: rioScore,
      active,
      keystoneAvailable: keystoneAvailable,
      keystone: { level: keystoneLevel, dungeon: keystoneDungeon },
      tradeAllArmor,
      cantTrade,
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
              {mode == 'edit' ? t('modal.editCharacter.title') : t('modal.newCharacter.title')}
              <button
                onClick={() => handleClose(true)}
                className="text-zinc-400 hover:text-white transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </Dialog.Title>

          <FactionRadioGroup value={faction} onChange={setFaction} />

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

          <FloatingInput
            id="rio"
            label={t('modal.newCharacter.rioScore.label')}
            value={rioScore}
            type="number"
            onChange={(e) => setRioScore(parseInt(e.target.value))}
            required={true}
          />

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

          <Field>
            <div className="flex items-center gap-3">
              <Switch
                id={'keystone-available'}
                checked={keystoneAvailable}
                onChange={setKeystoneAvailable}
                className={`${
                  keystoneAvailable ? 'bg-blue-600' : 'bg-zinc-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    keystoneAvailable ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <Label className="text-sm text-white">
                {t('modal.newCharacter.keystone.available')}
              </Label>
            </div>
          </Field>

          <div className="flex gap-4">
            <FloatingInput
              id="keystone-level"
              label={t('modal.newCharacter.keystone.level')}
              type="number"
              value={keystoneLevel}
              className={'flex-1'}
              onChange={(e) => setKeystoneLevel(Number(e.target.value))}
              required={true}
              disabled={!keystoneAvailable}
            />
            <FloatingSelect
              id="keystone-dungeon"
              label={t('modal.newCharacter.keystone.dungeon')}
              value={keystoneDungeon}
              className={'flex-2'}
              onChange={(e) => setKeystoneDungeon(e.target.value as DungeonId)}
              options={Object.entries(DUNGEON_TRANSLATION_KEYS).map(([key, label]) => ({
                value: key,
                label: label,
              }))}
              required={true}
              disabled={!keystoneAvailable}
            />
          </div>

          <Field>
            <div className="flex items-center gap-3">
              <Switch
                id={'trade-all'}
                checked={tradeAllArmor}
                onChange={setTradeAllArmor}
                className={`${
                  tradeAllArmor ? 'bg-blue-600' : 'bg-zinc-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    tradeAllArmor ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <Label className="text-sm text-white">{t('modal.newCharacter.trade.all')}</Label>
            </div>
          </Field>

          <ArmorMultiSelect
            disabled={tradeAllArmor}
            armorSlots={cantTrade}
            setArmorSlots={setCantTrade}
          />

          <Field>
            <div className="flex items-center gap-3">
              <Switch
                id={'active'}
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
              <Label className="text-sm text-white">{t('modal.newCharacter.active')}</Label>
            </div>
          </Field>

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => handleClose(true)}
              className="text-sm text-zinc-400 hover:text-white transition cursor-pointer"
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
                !ilvl ||
                (!tradeAllArmor && cantTrade.length <= 0)
              }
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {t('modal.save')}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
