import { useTranslation } from 'react-i18next'

import { Class } from './Class'
import { Role } from './Roles'

export enum Spec {
  // Death Knight
  Blood = 'Blood',
  Frost = 'Frost',
  Unholy = 'Unholy',

  // Demon Hunter
  Havoc = 'Havoc',
  Vengeance = 'Vengeance',

  // Druid
  Balance = 'Balance',
  Feral = 'Feral',
  Guardian = 'Guardian',
  RestorationDruid = 'RestorationDruid',

  // Evoker
  Devastation = 'Devastation',
  Preservation = 'Preservation',
  Augmentation = 'Augmentation',

  // Hunter
  BeastMastery = 'Beast Mastery',
  Marksmanship = 'Marksmanship',
  Survival = 'Survival',

  // Mage
  Arcane = 'Arcane',
  Fire = 'Fire',
  FrostMage = 'Frost Mage',

  // Monk
  Brewmaster = 'Brewmaster',
  Mistweaver = 'Mistweaver',
  Windwalker = 'Windwalker',

  // Paladin
  HolyPaladin = 'HolyPaladin',
  ProtectionPaladin = 'ProtectionPaladin',
  Retribution = 'Retribution',

  // Priest
  Discipline = 'Discipline',
  HolyPriest = 'HolyPriest',
  Shadow = 'Shadow',

  // Rogue
  Assassination = 'Assassination',
  Outlaw = 'Outlaw',
  Subtlety = 'Subtlety',

  // Shaman
  Elemental = 'Elemental',
  Enhancement = 'Enhancement',
  RestorationShaman = 'RestorationShaman',

  // Warlock
  Affliction = 'Affliction',
  Demonology = 'Demonology',
  Destruction = 'Destruction',

  // Warrior
  Arms = 'Arms',
  Fury = 'Fury',
  ProtectionWarrior = 'ProtectionWarrior',
}

export function useSpecTranslations(): Record<Spec, string> {
  const { t } = useTranslation()

  return {
    [Spec.Blood]: t('spec.blood'),
    [Spec.Frost]: t('spec.frost'),
    [Spec.Unholy]: t('spec.unholy'),

    [Spec.Havoc]: t('spec.havoc'),
    [Spec.Vengeance]: t('spec.vengeance'),

    [Spec.Balance]: t('spec.balance'),
    [Spec.Feral]: t('spec.feral'),
    [Spec.Guardian]: t('spec.guardian'),
    [Spec.RestorationDruid]: t('spec.restorationDruid'),

    [Spec.Devastation]: t('spec.devastation'),
    [Spec.Preservation]: t('spec.preservation'),
    [Spec.Augmentation]: t('spec.augmentation'),

    [Spec.BeastMastery]: t('spec.beastMastery'),
    [Spec.Marksmanship]: t('spec.marksmanship'),
    [Spec.Survival]: t('spec.survival'),

    [Spec.Arcane]: t('spec.arcane'),
    [Spec.Fire]: t('spec.fire'),
    [Spec.FrostMage]: t('spec.frostMage'),

    [Spec.Brewmaster]: t('spec.brewmaster'),
    [Spec.Mistweaver]: t('spec.mistweaver'),
    [Spec.Windwalker]: t('spec.windwalker'),

    [Spec.HolyPaladin]: t('spec.holyPaladin'),
    [Spec.ProtectionPaladin]: t('spec.protectionPaladin'),
    [Spec.Retribution]: t('spec.retribution'),

    [Spec.Discipline]: t('spec.discipline'),
    [Spec.HolyPriest]: t('spec.holyPriest'),
    [Spec.Shadow]: t('spec.shadow'),

    [Spec.Assassination]: t('spec.assassination'),
    [Spec.Outlaw]: t('spec.outlaw'),
    [Spec.Subtlety]: t('spec.subtlety'),

    [Spec.Elemental]: t('spec.elemental'),
    [Spec.Enhancement]: t('spec.enhancement'),
    [Spec.RestorationShaman]: t('spec.restorationShaman'),

    [Spec.Affliction]: t('spec.affliction'),
    [Spec.Demonology]: t('spec.demonology'),
    [Spec.Destruction]: t('spec.destruction'),

    [Spec.Arms]: t('spec.arms'),
    [Spec.Fury]: t('spec.fury'),
    [Spec.ProtectionWarrior]: t('spec.protectionWarrior'),
  }
}

export const SPECS_BY_CLASS: Record<Class, { spec: Spec; role: Role }[]> = {
  [Class.DeathKnight]: [
    { spec: Spec.Blood, role: Role.Tank },
    { spec: Spec.Frost, role: Role.DPS },
    { spec: Spec.Unholy, role: Role.DPS },
  ],
  [Class.DemonHunter]: [
    { spec: Spec.Havoc, role: Role.DPS },
    { spec: Spec.Vengeance, role: Role.Tank },
  ],
  [Class.Druid]: [
    { spec: Spec.Balance, role: Role.DPS },
    { spec: Spec.Feral, role: Role.DPS },
    { spec: Spec.Guardian, role: Role.Tank },
    { spec: Spec.RestorationDruid, role: Role.Healer },
  ],
  [Class.Evoker]: [
    { spec: Spec.Devastation, role: Role.DPS },
    { spec: Spec.Preservation, role: Role.Healer },
    { spec: Spec.Augmentation, role: Role.DPS },
  ],
  [Class.Hunter]: [
    { spec: Spec.BeastMastery, role: Role.DPS },
    { spec: Spec.Marksmanship, role: Role.DPS },
    { spec: Spec.Survival, role: Role.DPS },
  ],
  [Class.Mage]: [
    { spec: Spec.Arcane, role: Role.DPS },
    { spec: Spec.Fire, role: Role.DPS },
    { spec: Spec.FrostMage, role: Role.DPS },
  ],
  [Class.Monk]: [
    { spec: Spec.Brewmaster, role: Role.Tank },
    { spec: Spec.Mistweaver, role: Role.Healer },
    { spec: Spec.Windwalker, role: Role.DPS },
  ],
  [Class.Paladin]: [
    { spec: Spec.HolyPaladin, role: Role.Healer },
    { spec: Spec.ProtectionPaladin, role: Role.Tank },
    { spec: Spec.Retribution, role: Role.DPS },
  ],
  [Class.Priest]: [
    { spec: Spec.Discipline, role: Role.Healer },
    { spec: Spec.HolyPriest, role: Role.Healer },
    { spec: Spec.Shadow, role: Role.DPS },
  ],
  [Class.Rogue]: [
    { spec: Spec.Assassination, role: Role.DPS },
    { spec: Spec.Outlaw, role: Role.DPS },
    { spec: Spec.Subtlety, role: Role.DPS },
  ],
  [Class.Shaman]: [
    { spec: Spec.Elemental, role: Role.DPS },
    { spec: Spec.Enhancement, role: Role.DPS },
    { spec: Spec.RestorationShaman, role: Role.Healer },
  ],
  [Class.Warlock]: [
    { spec: Spec.Affliction, role: Role.DPS },
    { spec: Spec.Demonology, role: Role.DPS },
    { spec: Spec.Destruction, role: Role.DPS },
  ],
  [Class.Warrior]: [
    { spec: Spec.Arms, role: Role.DPS },
    { spec: Spec.Fury, role: Role.DPS },
    { spec: Spec.ProtectionWarrior, role: Role.Tank },
  ],
}
