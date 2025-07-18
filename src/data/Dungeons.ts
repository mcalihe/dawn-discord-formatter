import { useTranslation } from 'react-i18next'

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

export function useDungeonTranslations(): Record<DungeonId, string> {
  const { t } = useTranslation()

  return {
    [DungeonId.Flood]: t('dungeon.flood'),
    [DungeonId.WS]: t('dungeon.ws'),
    [DungeonId.ToP]: t('dungeon.top'),
    [DungeonId.ML]: t('dungeon.ml'),
    [DungeonId.Cinder]: t('dungeon.cinder'),
    [DungeonId.DFC]: t('dungeon.dfc'),
    [DungeonId.Rook]: t('dungeon.rook'),
    [DungeonId.Priory]: t('dungeon.priory'),
  }
}
