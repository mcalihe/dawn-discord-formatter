import { useEffect, useState } from 'react'

import { AddNewPlayerCard } from './components/cards/AddNewPlayerCard'
import { PlayerCard } from './components/cards/PlayerCard'
import { LanguageSwitcher } from './components/controls/LanguageSwitcher'
import { Footer } from './components/Footer'
import { MarkdownOutput } from './components/MarkdownOutput'
import { EditPlayerModal } from './components/modals/EditPlayerModal'
import { Class, useClassTranslations } from './data/Class'
import { DungeonId } from './data/Dungeons'
import { Faction } from './data/Faction'
import { Role } from './data/Roles'
import { Spec } from './data/Specs'
import { Player } from './models/Player'
import { DiscordFormatService } from './services/DiscordFormatService'

export default function App() {
  const test: Player[] = [
    {
      discord: 'McAlihe',
      name: 'Michael',
      id: 123,
      characters: [
        {
          name: 'Nerfblaster',
          realm: 'Blackhand',
          rioScore: 3300,
          active: true,
          class: Class.Hunter,
          iLvl: 682,
          keystoneAvailable: true,
          keystone: { dungeon: DungeonId.ML, level: 12 },
          tradeAllArmor: true,
          cantTrade: [],
          roles: [Role.DPS],
          faction: Faction.Horde,
          source: 'manual',
          specs: [Spec.Marksmanship],
        },
      ],
    },
  ]
  const classTranslations = useClassTranslations()

  const [players, setPlayers] = useState<Player[]>(test)
  const [output, setOutput] = useState<string>()
  const [showModal, setShowModal] = useState(false)
  const AddNewPlayer = (name: string, discord?: string) => {
    const highestId = Math.max(...players.map((o) => o.id))
    const newId = highestId != -Infinity ? highestId + 1 : 0
    setPlayers([...players, { id: newId, name: name, discord: discord, characters: [] }])
  }

  useEffect(() => {
    setOutput(DiscordFormatService.formatTeam(players, classTranslations))
  }, [players])

  return (
    <div className={'flex flex-col w-full flex-1 gap-8'}>
      <div className={'flex flex-col gap-8'}>
        <div className={'flex flex-row justify-between w-full gap-8'}>
          <h1>Dawn Discord Formatter</h1>
          <LanguageSwitcher />
        </div>
        <div className={'flex flex-row min-h-[30rem] gap-2'}>
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onUpdatePlayer={() => {
                console.log('update', player)
                const idx = players.findIndex((p) => {
                  return p.id === player.id
                })

                if (idx >= 0 && players.length > idx) {
                  players[idx] = player
                  setPlayers([...players])
                }
              }}
              onDeletePlayer={() => {
                console.log('Deleting player', player)
                const idx = players.findIndex((p) => {
                  return p.id === player.id
                })

                if (idx >= 0 && players.length > idx) {
                  players.splice(idx, 1)
                  setPlayers([...players])
                }
              }}
            />
          ))}
          {players.length < 4 && <AddNewPlayerCard onClick={() => setShowModal(true)} />}

          <EditPlayerModal
            open={showModal}
            onClose={() => setShowModal(false)}
            mode={'create'}
            onSave={(data) => AddNewPlayer(data.name, data.discord)}
          />
        </div>
      </div>

      <div>
        <h2>Output</h2>
        <MarkdownOutput value={output} className={'max-w-[60rem]'} />
      </div>
      <Footer />
    </div>
  )
}
