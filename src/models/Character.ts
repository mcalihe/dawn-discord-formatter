import { Class } from '../data/Class'
import { Role } from '../data/Roles'
import { Spec } from '../data/Specs'
import { Keystone } from './Keystone'

export interface Character {
  name: string
  realm: string
  class: Class
  specs: Spec[]
  roles: Role[]
  iLvl: number
  keystone: Keystone
  active: boolean
  source: string
}
