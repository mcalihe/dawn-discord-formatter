import { Keystone } from './Keystone'

export interface Character {
  name: string
  realm: string
  class: string
  spec: string
  role: string
  ilvl: number
  keystone: Keystone
  active: boolean
  source: string
}
