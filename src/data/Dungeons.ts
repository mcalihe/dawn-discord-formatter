import i18n from 'i18next'

export enum DungeonId {
  Flood = 'Flood',
  WS = 'WS',
  ToP = 'ToP',
  ML = 'ML',
  Cinder = 'Cinder',
  DFC = 'DFC',
  Rook = 'Rook',
  Priory = 'Priory',
}
export const DUNGEON_TRANSLATION_KEYS: Record<DungeonId, string> = {
  [DungeonId.Flood]: i18n.t('dungeon.flood'),
  [DungeonId.WS]: i18n.t('dungeon.ws'),
  [DungeonId.ToP]: i18n.t('dungeon.top'),
  [DungeonId.ML]: i18n.t('dungeon.ml'),
  [DungeonId.Cinder]: i18n.t('dungeon.cinder'),
  [DungeonId.DFC]: i18n.t('dungeon.dfc'),
  [DungeonId.Rook]: i18n.t('dungeon.rook'),
  [DungeonId.Priory]: i18n.t('dungeon.priory'),
}
// export const Dungeons = [
//   { id: DungeonId.Flood, name: 'Operation: Floodgate' },
//   { id: DungeonId.WS, name: 'Operation Mechagon – Workshop' },
//   { id: DungeonId.ToP, name: 'Theater of Pain' },
//   { id: DungeonId.ML, name: 'The MOTHERLODE!!' },
//   { id: DungeonId.Cinder, name: 'Cinderbrew Meadery' },
//   { id: DungeonId.DFC, name: 'Darkflame Cleft' },
//   { id: DungeonId.Rook, name: 'The Rookery' },
//   { id: DungeonId.Priory, name: 'Priory of the Sacred Flame' },
// ]
