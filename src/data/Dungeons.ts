import { useTranslation } from 'react-i18next'

/*
 * Updating for a new season:
 *  1. Move every entry of `DungeonId` that leaves the rotation into `LegacyDungeonId`
 *     (keep the id string unchanged, stored keystones reference it).
 *  2. Add the new dungeons to `DungeonId` and `useDungeonTranslations`.
 *  3. Add the translation keys to src/locales/*.json.
 *  4. Point `DEFAULT_DUNGEON` to a dungeon of the new season.
 * Old keystones stay untouched in storage. They are shown as outdated and
 * replaced with `DEFAULT_DUNGEON` as soon as the keystone gets edited.
 */

// Midnight Season 2
export enum DungeonId {
  AoF = 'AoF', // Altar of Fangs
  MR = 'MR', // Murder Row
  Nalo = 'Nalo', // Den of Nalorakk
  Vale = 'Vale', // The Blinding Vale
  Voidscar = 'Voidscar', // Voidscar Arena
  KR = 'KR', // King's Rest
  ToS = 'ToS', // Temple of Sethraliss
  RLP = 'RLP', // Ruby Life Pools
}

export const DEFAULT_DUNGEON = DungeonId.AoF

export function useDungeonTranslations(): Record<DungeonId, string> {
  const { t } = useTranslation()

  return {
    [DungeonId.AoF]: t('dungeon.altarOfFangs', 'Altar of Fangs'),
    [DungeonId.MR]: t('dungeon.murderRow', 'Murder Row'),
    [DungeonId.Nalo]: t('dungeon.denOfNalorakk', 'Den of Nalorakk'),
    [DungeonId.Vale]: t('dungeon.blindingVale', 'The Blinding Vale'),
    [DungeonId.Voidscar]: t('dungeon.voidscarArena', 'Voidscar Arena'),
    [DungeonId.KR]: t('dungeon.kingsRest', 'King’s Rest'),
    [DungeonId.ToS]: t('dungeon.templeOfSethraliss', 'Temple of Sethraliss'),
    [DungeonId.RLP]: t('dungeon.rubyLifePools', 'Ruby Life Pools'),
  }
}

// Dungeons of previous seasons, still referenced by stored keystones
export enum LegacyDungeonId {
  // The War Within Season 3
  Ara = 'Ara',
  Dawn = 'Dawn',
  Eco = 'Eco',
  HoA = 'HoA',
  Flood = 'Flood',
  Priory = 'Priory',
  TazaSW = 'TazaSW',
  TazaSG = 'TazaSG',
  // The War Within Season 2
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
    [LegacyDungeonId.Ara]: t('dungeon.araKara', 'Ara-Kara, City of Echoes'),
    [LegacyDungeonId.Dawn]: t('dungeon.dawnbreaker', 'The Dawnbreaker'),
    [LegacyDungeonId.Eco]: t('dungeon.ecoDome', 'Eco-Dome Al’dani'),
    [LegacyDungeonId.HoA]: t('dungeon.hallsOfAtonement', 'Halls of Atonement'),
    [LegacyDungeonId.Flood]: t('dungeon.flood', 'Operation: Floodgate'),
    [LegacyDungeonId.Priory]: t('dungeon.priory', 'Priory of the Sacred Flame'),
    [LegacyDungeonId.TazaSW]: t('dungeon.tazaveshStreets', 'Tazavesh: Streets of Wonder'),
    [LegacyDungeonId.TazaSG]: t('dungeon.tazaveshGambit', 'Tazavesh: So’leah’s Gambit'),
    [LegacyDungeonId.WS]: t('dungeon.ws'),
    [LegacyDungeonId.ToP]: t('dungeon.top'),
    [LegacyDungeonId.ML]: t('dungeon.ml'),
    [LegacyDungeonId.Cinder]: t('dungeon.cinder'),
    [LegacyDungeonId.DFC]: t('dungeon.dfc'),
    [LegacyDungeonId.Rook]: t('dungeon.rook'),
  }
}

export function isCurrentDungeon(value?: string): value is DungeonId {
  return Object.values(DungeonId).includes(value as DungeonId)
}

export function currentDungeonOrDefault(value?: string): DungeonId {
  return isCurrentDungeon(value) ? value : DEFAULT_DUNGEON
}
