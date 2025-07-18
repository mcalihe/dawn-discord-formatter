import { CLASS_ICONS } from '../data/Class'
import { FACTION_ICONS } from '../data/Faction'
import { ROLE_ICONS } from '../data/Roles'
import { Character } from '../models/Character'
import { Player } from '../models/Player'

const groupSizeLabels: Record<number, string> = {
  1: 'SOLO',
  2: 'DUO',
  3: 'TRIO',
  4: 'TEAM TAKE',
}

export class DiscordFormatService {
  static formatScore(score: number): string {
    return (Math.round(score / 100) / 10).toFixed(1) + 'k'
  }

  static formatTeam(players: Player[]): string {
    if (players.length < 1) {
      return ''
    }

    const activePlayers = players.filter((p) => p.characters.filter((c) => c.active).length > 0)

    const header = groupSizeLabels[activePlayers.length]
    let output = header + (activePlayers.length === 1 ? ' ' : '\n')
    const playerDescriptions = activePlayers
      .map((p, idx) => this.formatPlayer(p, activePlayers.length === 1 ? undefined : idx + 1))
      .join('\n')
    output += playerDescriptions + '\n'
    return output
  }

  static formatPlayer(player: Player, number?: number): string {
    if (player.characters.length < 1) {
      return ''
    }

    const highestScore = DiscordFormatService.formatScore(
      Math.max(...player.characters.filter((c) => c.active).map((c) => c.rioScore))
    )

    const playerInfo = number ? `Player${number} ` : ''
    const playerDiscord = player.discord !== undefined ? `@${player.discord} ` : ''
    const header = `${playerInfo}${playerDiscord}:Raiderio: ${highestScore}`
    const characterLines = player.characters.filter((c) => c.active).map(this.formatCharacterLine)

    return [header, ...characterLines].join('\n')
  }

  static formatCharacterLine(char: Character): string {
    const classIcon = CLASS_ICONS[char.class] ?? ':question:'
    const roleIcons = char.roles.map((r) => ROLE_ICONS[r] ?? ':grey_question:').join(' ')
    const faction = FACTION_ICONS[char.faction]
    const dungeon = char.keystone.dungeon

    return `${roleIcons} ${classIcon} ${faction} ${char.iLvl}  :Keystone: +${char.keystone.level} ${dungeon}  :Armor: Trade All`
  }
}
