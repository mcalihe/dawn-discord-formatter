import { useState } from 'react'

import { AddNewPlayerCard } from './components/AddNewPlayerCard'
import { NewPlayerModal } from './components/NewPlayerModal'
import { PlayerCard } from './components/PlayerCard'
import { Player } from './models/Player'
export default function App() {
  const [players, setPlayers] = useState<Player[]>([])
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
          <PlayerCard key={player.name} player={player} />
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
