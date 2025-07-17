import { UserRound } from 'lucide-react'
import { useState } from 'react'

import { Character } from '../models/Character'
import { Player } from '../models/Player'
import { AddNewCharacterBadge } from './AddNewCharacterBadge'
import { CharacterBadge } from './CharacterBadge'
import { NewCharacterModal } from './modals/NewCharacterModal'

type PlayerCardProps = { player: Player; onUpdatePlayer: (player: Player) => void }

export const PlayerCard = ({ player, onUpdatePlayer }: PlayerCardProps) => {
  const [showModal, setShowModal] = useState(false)

  const handleAddCharacter = (char: Character) => {
    onUpdatePlayer({
      ...player,
      characters: [...player.characters, char],
    })
  }

  return (
    <div className={'card'}>
      <div className={'flex flex-col gap-4'}>
        <div className={'flex flex-row gap-2'}>
          {' '}
          <UserRound className="w-6 h-6" />
          <h2 className="text-sm font-medium">{player.name}</h2>
        </div>
        <div className={'flex flex-col gap-2'}>
          {player.characters.map((char, idx) => (
            <CharacterBadge
              key={idx}
              char={char}
              onToggleActive={() => {
                player.characters[idx].active = !player.characters[idx].active
                onUpdatePlayer(player)
              }}
            />
          ))}
          {player.characters.length > 0 && <div className={'h-0.5'} />}
          <AddNewCharacterBadge onClick={() => setShowModal(true)} />
          <NewCharacterModal
            open={showModal}
            onClose={() => setShowModal(false)}
            onSave={handleAddCharacter}
          />
        </div>
      </div>
    </div>
  )
}
