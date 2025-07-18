import i18n from '../i18n'
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

export const SPEC_TRANSLATION_KEYS: Record<Spec, string> = {
  // Death Knight
  [Spec.Blood]: i18n.t('spec.blood'),
  [Spec.Frost]: i18n.t('spec.frost'),
  [Spec.Unholy]: i18n.t('spec.unholy'),

  // Demon Hunter
  [Spec.Havoc]: i18n.t('spec.havoc'),
  [Spec.Vengeance]: i18n.t('spec.vengeance'),

  // Druid
  [Spec.Balance]: i18n.t('spec.balance'),
  [Spec.Feral]: i18n.t('spec.feral'),
  [Spec.Guardian]: i18n.t('spec.guardian'),
  [Spec.RestorationDruid]: i18n.t('spec.restorationDruid'),

  // Evoker
  [Spec.Devastation]: i18n.t('spec.devastation'),
  [Spec.Preservation]: i18n.t('spec.preservation'),
  [Spec.Augmentation]: i18n.t('spec.augmentation'),

  // Hunter
  [Spec.BeastMastery]: i18n.t('spec.beastMastery'),
  [Spec.Marksmanship]: i18n.t('spec.marksmanship'),
  [Spec.Survival]: i18n.t('spec.survival'),

  // Mage
  [Spec.Arcane]: i18n.t('spec.arcane'),
  [Spec.Fire]: i18n.t('spec.fire'),
  [Spec.FrostMage]: i18n.t('spec.frostMage'),

  // Monk
  [Spec.Brewmaster]: i18n.t('spec.brewmaster'),
  [Spec.Mistweaver]: i18n.t('spec.mistweaver'),
  [Spec.Windwalker]: i18n.t('spec.windwalker'),

  // Paladin
  [Spec.HolyPaladin]: i18n.t('spec.holyPaladin'),
  [Spec.ProtectionPaladin]: i18n.t('spec.protectionPaladin'),
  [Spec.Retribution]: i18n.t('spec.retribution'),

  // Priest
  [Spec.Discipline]: i18n.t('spec.discipline'),
  [Spec.HolyPriest]: i18n.t('spec.holyPriest'),
  [Spec.Shadow]: i18n.t('spec.shadow'),

  // Rogue
  [Spec.Assassination]: i18n.t('spec.assassination'),
  [Spec.Outlaw]: i18n.t('spec.outlaw'),
  [Spec.Subtlety]: i18n.t('spec.subtlety'),

  // Shaman
  [Spec.Elemental]: i18n.t('spec.elemental'),
  [Spec.Enhancement]: i18n.t('spec.enhancement'),
  [Spec.RestorationShaman]: i18n.t('spec.restorationShaman'),

  // Warlock
  [Spec.Affliction]: i18n.t('spec.affliction'),
  [Spec.Demonology]: i18n.t('spec.demonology'),
  [Spec.Destruction]: i18n.t('spec.destruction'),

  // Warrior
  [Spec.Arms]: i18n.t('spec.arms'),
  [Spec.Fury]: i18n.t('spec.fury'),
  [Spec.ProtectionWarrior]: i18n.t('spec.protectionWarrior'),
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
