export enum Faction {
  Horde = 'Horde',
  Alliance = 'Alliance',
}
export const FACTION_TRANSLATION_KEYS: Record<Faction, string> = {
  Horde: 'faction.horde',
  Alliance: 'faction.alliance',
}

export const FACTION_ICONS: Record<Faction, string> = {
  Horde: ':horde:',
  Alliance: ':alliance:',
}
