import i18n from 'i18next'

export enum Faction {
  Horde = 'Horde',
  Alliance = 'Alliance',
}
export const FACTION_TRANSLATION_KEYS: Record<Faction, string> = {
  Horde: i18n.t('faction.horde'),
  Alliance: i18n.t('faction.alliance'),
}

export const FACTION_ICONS: Record<Faction, string> = {
  Horde: ':horde:',
  Alliance: ':alliance:',
}
