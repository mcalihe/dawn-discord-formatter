import i18n from '../i18n'

export enum Class {
  DeathKnight = 'death-knight',
  DemonHunter = 'demon-hunter',
  Druid = 'druid',
  Evoker = 'evoker',
  Hunter = 'hunter',
  Mage = 'mage',
  Monk = 'monk',
  Paladin = 'paladin',
  Priest = 'priest',
  Rogue = 'rogue',
  Shaman = 'shaman',
  Warlock = 'warlock',
  Warrior = 'warrior',
}

export const CLASS_TRANSLATIONS: Record<Class, string> = {
  [Class.DeathKnight]: i18n.t('class.deathKnight'),
  [Class.DemonHunter]: i18n.t('class.demonHunter'),
  [Class.Druid]: i18n.t('class.druid'),
  [Class.Evoker]: i18n.t('class.evoker'),
  [Class.Hunter]: i18n.t('class.hunter'),
  [Class.Mage]: i18n.t('class.mage'),
  [Class.Monk]: i18n.t('class.monk'),
  [Class.Paladin]: i18n.t('class.paladin'),
  [Class.Priest]: i18n.t('class.priest'),
  [Class.Rogue]: i18n.t('class.rogue'),
  [Class.Shaman]: i18n.t('class.shaman'),
  [Class.Warlock]: i18n.t('class.warlock'),
  [Class.Warrior]: i18n.t('class.warrior'),
}

export const CLASS_ICONS: Record<Class, string> = {
  [Class.DeathKnight]: ':deathknight:',
  [Class.DemonHunter]: ':demonhunter:',
  [Class.Druid]: ':druid:',
  [Class.Evoker]: ':evoker:',
  [Class.Hunter]: ':hunter:',
  [Class.Mage]: ':mage:',
  [Class.Monk]: ':monk:',
  [Class.Paladin]: ':paladin:',
  [Class.Priest]: ':priest:',
  [Class.Rogue]: ':rogue:',
  [Class.Shaman]: ':shaman:',
  [Class.Warlock]: ':warlock:',
  [Class.Warrior]: ':warrior:',
}
