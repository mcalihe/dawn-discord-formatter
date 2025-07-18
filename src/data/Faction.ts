import { useTranslation } from 'react-i18next'

export enum Faction {
  Horde = 'Horde',
  Alliance = 'Alliance',
}

export function useFactionTranslations(): Record<Faction, string> {
  const { t } = useTranslation()

  return {
    [Faction.Horde]: t('faction.horde'),
    [Faction.Alliance]: t('faction.alliance'),
  }
}

export const FACTION_ICONS: Record<Faction, string> = {
  Horde: ':horde:',
  Alliance: ':alliance:',
}
