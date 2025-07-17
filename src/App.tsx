import { useState } from 'react'

import { AddNewPlayerCard } from './components/AddNewPlayerCard'
import { NewPlayerModal } from './components/modals/NewPlayerModal'
import { PlayerCard } from './components/PlayerCard'
import { Player } from './models/Player'
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
          active: true,
          class: 'Hunter',
          ilvl: 682,
          keystone: { dungeon: 'ML', level: 12 },
          role: 'DD',
          source: 'manual',
          spec: 'MM',
        },
      ],
    },
  ]

  const [players, setPlayers] = useState<Player[]>(test)
  const [showModal, setShowModal] = useState(false)
  function AddNewPlayer(name: string, discord?: string) {
    const highestId = Math.max(...players.map((o) => o.id))
    const newId = highestId != Infinity ? highestId : 0
    setPlayers([...players, { id: newId, name: name, discord: discord, characters: [] }])
  }

  return (
    <div className={'flex flex-col gap-8'}>
      <h1>Dawn Discord Formatter</h1>
      <div className={'flex flex-row min-h-[30rem] gap-2'}>
        {players.map((player) => (
          <PlayerCard
            key={player.name}
            player={player}
            onUpdatePlayer={(player) => {
              const idx = players.findIndex((p) => {
                return p.id === player.id
              })

              if (idx >= 0 && players.length > idx) {
                players[idx] = player
                setPlayers([...players])
              }
            }}
          />
        ))}
        <AddNewPlayerCard onClick={() => setShowModal(true)} />

        {showModal && (
          <NewPlayerModal
            onClose={() => setShowModal(false)}
            onConfirm={(name, discord) => AddNewPlayer(name, discord)}
          />
        )}
      </div>
    </div>
  )
}
