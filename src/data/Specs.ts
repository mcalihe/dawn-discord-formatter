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

export const SPEC_OPTIONS = [
  // Death Knight
  { id: Spec.Blood, label: 'Blood' },
  { id: Spec.Frost, label: 'Frost' },
  { id: Spec.Unholy, label: 'Unholy' },

  // Demon Hunter
  { id: Spec.Havoc, label: 'Havoc' },
  { id: Spec.Vengeance, label: 'Vengeance' },

  // Druid
  { id: Spec.Balance, label: 'Balance' },
  { id: Spec.Feral, label: 'Feral' },
  { id: Spec.Guardian, label: 'Guardian' },
  { id: Spec.RestorationDruid, label: 'Restoration' },

  // Evoker
  { id: Spec.Devastation, label: 'Devastation' },
  { id: Spec.Preservation, label: 'Preservation' },
  { id: Spec.Augmentation, label: 'Augmentation' },

  // Hunter
  { id: Spec.BeastMastery, label: 'Beast Mastery' },
  { id: Spec.Marksmanship, label: 'Marksmanship' },
  { id: Spec.Survival, label: 'Survival' },

  // Mage
  { id: Spec.Arcane, label: 'Arcane' },
  { id: Spec.Fire, label: 'Fire' },
  { id: Spec.FrostMage, label: 'Frost' },

  // Monk
  { id: Spec.Brewmaster, label: 'Brewmaster' },
  { id: Spec.Mistweaver, label: 'Mistweaver' },
  { id: Spec.Windwalker, label: 'Windwalker' },

  // Paladin
  { id: Spec.HolyPaladin, label: 'Holy' },
  { id: Spec.ProtectionPaladin, label: 'Protection' },
  { id: Spec.Retribution, label: 'Retribution' },

  // Priest
  { id: Spec.Discipline, label: 'Discipline' },
  { id: Spec.HolyPriest, label: 'Holy' },
  { id: Spec.Shadow, label: 'Shadow' },

  // Rogue
  { id: Spec.Assassination, label: 'Assassination' },
  { id: Spec.Outlaw, label: 'Outlaw' },
  { id: Spec.Subtlety, label: 'Subtlety' },

  // Shaman
  { id: Spec.Elemental, label: 'Elemental' },
  { id: Spec.Enhancement, label: 'Enhancement' },
  { id: Spec.RestorationShaman, label: 'Restoration' },

  // Warlock
  { id: Spec.Affliction, label: 'Affliction' },
  { id: Spec.Demonology, label: 'Demonology' },
  { id: Spec.Destruction, label: 'Destruction' },

  // Warrior
  { id: Spec.Arms, label: 'Arms' },
  { id: Spec.Fury, label: 'Fury' },
  { id: Spec.ProtectionWarrior, label: 'Protection' },
]

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
