import { Classes } from './Classes'
import { CharacterRole } from './Roles'

export enum CharacterSpec {
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

export const SPECS_BY_CLASS: Record<Classes, { spec: CharacterSpec; role: CharacterRole }[]> = {
  [Classes.DeathKnight]: [
    { spec: CharacterSpec.Blood, role: CharacterRole.Tank },
    { spec: CharacterSpec.Frost, role: CharacterRole.DPS },
    { spec: CharacterSpec.Unholy, role: CharacterRole.DPS },
  ],
  [Classes.DemonHunter]: [
    { spec: CharacterSpec.Havoc, role: CharacterRole.DPS },
    { spec: CharacterSpec.Vengeance, role: CharacterRole.Tank },
  ],
  [Classes.Druid]: [
    { spec: CharacterSpec.Balance, role: CharacterRole.DPS },
    { spec: CharacterSpec.Feral, role: CharacterRole.DPS },
    { spec: CharacterSpec.Guardian, role: CharacterRole.Tank },
    { spec: CharacterSpec.RestorationDruid, role: CharacterRole.Healer },
  ],
  [Classes.Evoker]: [
    { spec: CharacterSpec.Devastation, role: CharacterRole.DPS },
    { spec: CharacterSpec.Preservation, role: CharacterRole.Healer },
    { spec: CharacterSpec.Augmentation, role: CharacterRole.DPS },
  ],
  [Classes.Hunter]: [
    { spec: CharacterSpec.BeastMastery, role: CharacterRole.DPS },
    { spec: CharacterSpec.Marksmanship, role: CharacterRole.DPS },
    { spec: CharacterSpec.Survival, role: CharacterRole.DPS },
  ],
  [Classes.Mage]: [
    { spec: CharacterSpec.Arcane, role: CharacterRole.DPS },
    { spec: CharacterSpec.Fire, role: CharacterRole.DPS },
    { spec: CharacterSpec.FrostMage, role: CharacterRole.DPS },
  ],
  [Classes.Monk]: [
    { spec: CharacterSpec.Brewmaster, role: CharacterRole.Tank },
    { spec: CharacterSpec.Mistweaver, role: CharacterRole.Healer },
    { spec: CharacterSpec.Windwalker, role: CharacterRole.DPS },
  ],
  [Classes.Paladin]: [
    { spec: CharacterSpec.HolyPaladin, role: CharacterRole.Healer },
    { spec: CharacterSpec.ProtectionPaladin, role: CharacterRole.Tank },
    { spec: CharacterSpec.Retribution, role: CharacterRole.DPS },
  ],
  [Classes.Priest]: [
    { spec: CharacterSpec.Discipline, role: CharacterRole.Healer },
    { spec: CharacterSpec.HolyPriest, role: CharacterRole.Healer },
    { spec: CharacterSpec.Shadow, role: CharacterRole.DPS },
  ],
  [Classes.Rogue]: [
    { spec: CharacterSpec.Assassination, role: CharacterRole.DPS },
    { spec: CharacterSpec.Outlaw, role: CharacterRole.DPS },
    { spec: CharacterSpec.Subtlety, role: CharacterRole.DPS },
  ],
  [Classes.Shaman]: [
    { spec: CharacterSpec.Elemental, role: CharacterRole.DPS },
    { spec: CharacterSpec.Enhancement, role: CharacterRole.DPS },
    { spec: CharacterSpec.RestorationShaman, role: CharacterRole.Healer },
  ],
  [Classes.Warlock]: [
    { spec: CharacterSpec.Affliction, role: CharacterRole.DPS },
    { spec: CharacterSpec.Demonology, role: CharacterRole.DPS },
    { spec: CharacterSpec.Destruction, role: CharacterRole.DPS },
  ],
  [Classes.Warrior]: [
    { spec: CharacterSpec.Arms, role: CharacterRole.DPS },
    { spec: CharacterSpec.Fury, role: CharacterRole.DPS },
    { spec: CharacterSpec.ProtectionWarrior, role: CharacterRole.Tank },
  ],
}
