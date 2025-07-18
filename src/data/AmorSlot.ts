import i18n from '../i18n'

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

export const ARMOR_SLOT_TRANSLATIONS: Record<ArmorSlot, string> = {
  [ArmorSlot.Head]: i18n.t('armorSlot.head'),
  [ArmorSlot.Neck]: i18n.t('armorSlot.neck'),
  [ArmorSlot.Shoulder]: i18n.t('armorSlot.shoulder'),
  [ArmorSlot.Back]: i18n.t('armorSlot.back'),
  [ArmorSlot.Chest]: i18n.t('armorSlot.chest'),
  [ArmorSlot.Wrist]: i18n.t('armorSlot.wrist'),
  [ArmorSlot.Hands]: i18n.t('armorSlot.hands'),
  [ArmorSlot.Waist]: i18n.t('armorSlot.waist'),
  [ArmorSlot.Legs]: i18n.t('armorSlot.legs'),
  [ArmorSlot.Feet]: i18n.t('armorSlot.feet'),
  [ArmorSlot.Finger]: i18n.t('armorSlot.finger'),
  [ArmorSlot.Trinket]: i18n.t('armorSlot.trinket'),
  [ArmorSlot.MainHand]: i18n.t('armorSlot.mainhand'),
  [ArmorSlot.OffHand]: i18n.t('armorSlot.offhand'),
  [ArmorSlot.TwoHand]: i18n.t('armorSlot.twohand'),
  [ArmorSlot.Ranged]: i18n.t('armorSlot.ranged'),
  [ArmorSlot.Tabard]: i18n.t('armorSlot.tabard'),
  [ArmorSlot.Shirt]: i18n.t('armorSlot.shirt'),
}
