import { useTranslation } from 'react-i18next'

export enum DungeonId {
  Ara = 'Ara', // Ara-Kara, City of Echoes
  Dawn = 'Dawn', // The Dawnbreaker
  Eco = 'Eco', // Eco-Dome Al’dani
  HoA = 'HoA', // Halls of Atonement
  Flood = 'Flood', // Operation: Floodgate
  Priory = 'Priory', // Priory of the Sacred Flame
  TazaSW = 'TazaSW', // Tazavesh: Streets of Wonder
  TazaSG = 'TazaSG', // Tazavesh: So’leah’s Gambit
}

export function useDungeonTranslations(): Record<DungeonId, string> {
  const { t } = useTranslation()

  return {
    [DungeonId.Ara]: t('dungeon.araKara', 'Ara-Kara, City of Echoes'),
    [DungeonId.Dawn]: t('dungeon.dawnbreaker', 'The Dawnbreaker'),
    [DungeonId.Eco]: t('dungeon.ecoDome', 'Eco-Dome Al’dani'),
    [DungeonId.HoA]: t('dungeon.hallsOfAtonement', 'Halls of Atonement'),
    [DungeonId.Flood]: t('dungeon.flood', 'Operation: Floodgate'),
    [DungeonId.Priory]: t('dungeon.priory', 'Priory of the Sacred Flame'),
    [DungeonId.TazaSW]: t('dungeon.tazaveshStreets', 'Tazavesh: Streets of Wonder'),
    [DungeonId.TazaSG]: t('dungeon.tazaveshGambit', 'Tazavesh: So’leah’s Gambit'),
  }
}
export enum LegacyDungeonId {
  WS = 'WS',
  ToP = 'ToP',
  ML = 'ML',
  Cinder = 'Cinder',
  DFC = 'DFC',
  Rook = 'Rook',
}
export function useLegacyDungeonTranslations(): Record<LegacyDungeonId, string> {
  const { t } = useTranslation()

  return {
    [LegacyDungeonId.WS]: t('dungeon.ws'),
    [LegacyDungeonId.ToP]: t('dungeon.top'),
    [LegacyDungeonId.ML]: t('dungeon.ml'),
    [LegacyDungeonId.Cinder]: t('dungeon.cinder'),
    [LegacyDungeonId.DFC]: t('dungeon.dfc'),
    [LegacyDungeonId.Rook]: t('dungeon.rook'),
  }
}
