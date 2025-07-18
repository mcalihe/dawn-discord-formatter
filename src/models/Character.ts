import { ArmorSlot } from '../data/AmorSlot'
import { Class } from '../data/Class'
import { Faction } from '../data/Faction'
import { Role } from '../data/Roles'
import { Spec } from '../data/Specs'
import { Keystone } from './Keystone'

export interface Character {
  name: string
  realm: string
  rioScore: number
  class: Class
  specs: Spec[]
  roles: Role[]
  iLvl: number
  keystoneAvailable: boolean
  keystone: Keystone
  tradeAllArmor: boolean
  cantTrade: ArmorSlot[]
  faction: Faction
  active: boolean
  source: string
}
