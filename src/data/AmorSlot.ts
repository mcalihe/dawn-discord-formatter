import { useTranslation } from 'react-i18next'

export enum ArmorSlot {
  Head = 'head',
  Neck = 'neck',
  Shoulder = 'shoulder',
  Back = 'back',
  Chest = 'chest',
  Wrist = 'wrist',
  Hands = 'hands',
  Waist = 'waist',
  Legs = 'legs',
  Feet = 'feet',

  Finger = 'finger',
  Trinket = 'trinket',

  MainHand = 'mainhand',
  OffHand = 'offhand',
  TwoHand = 'twohand',
  Ranged = 'ranged',

  Tabard = 'tabard',
  Shirt = 'shirt',
}

export function useArmorSlotTranslations(): Record<ArmorSlot, string> {
  const { t } = useTranslation()

  return {
    [ArmorSlot.Head]: t('armorSlot.head'),
    [ArmorSlot.Neck]: t('armorSlot.neck'),
    [ArmorSlot.Shoulder]: t('armorSlot.shoulder'),
    [ArmorSlot.Back]: t('armorSlot.back'),
    [ArmorSlot.Chest]: t('armorSlot.chest'),
    [ArmorSlot.Wrist]: t('armorSlot.wrist'),
    [ArmorSlot.Hands]: t('armorSlot.hands'),
    [ArmorSlot.Waist]: t('armorSlot.waist'),
    [ArmorSlot.Legs]: t('armorSlot.legs'),
    [ArmorSlot.Feet]: t('armorSlot.feet'),
    [ArmorSlot.Finger]: t('armorSlot.finger'),
    [ArmorSlot.Trinket]: t('armorSlot.trinket'),
    [ArmorSlot.MainHand]: t('armorSlot.mainhand'),
    [ArmorSlot.OffHand]: t('armorSlot.offhand'),
    [ArmorSlot.TwoHand]: t('armorSlot.twohand'),
    [ArmorSlot.Ranged]: t('armorSlot.ranged'),
    [ArmorSlot.Tabard]: t('armorSlot.tabard'),
    [ArmorSlot.Shirt]: t('armorSlot.shirt'),
  }
}
