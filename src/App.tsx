import { useState } from 'react'

import { AddNewPlayerCard } from './components/AddNewPlayerCard'
import { NewPlayerModal } from './components/NewPlayerModal'
import { Player } from './models/Player'
export default function App() {
  const [players, setPlayers] = useState<Player[]>([])
  const [showModal, setShowModal] = useState(false)
  function AddNewPlayer() {
    setPlayers([...players, { name: 'New Player', characters: [] }])
  }

  return (
    <div className={'flex flex-col gap-8'}>
      <h1>Dawn Discord Formatter</h1>
      <div className={'flex flex-row min-h-[30rem]'}>
        {players.map((player) => (
          <div key={player.name}>player</div>
        ))}
        <AddNewPlayerCard onClick={() => setShowModal(true)} />

        {showModal && (
          <NewPlayerModal
            onClose={() => setShowModal(false)}
            onConfirm={(name) => AddNewPlayer(name)}
          />
        )}
      </div>
    </div>
  )
}
