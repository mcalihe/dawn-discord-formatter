import { UserRound } from 'lucide-react'
import { useState } from 'react'

import { Character } from '../models/Character'
import { Player } from '../models/Player'
import { AddNewCharacterBadge } from './AddNewCharacterBadge'
import { CharacterCard } from './CharacterCard'
import { EditCharacterModal } from './modals/EditCharacterModal'

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
            <CharacterCard
              key={idx}
              char={char}
              onUpdateChar={(char) => {
                player.characters[idx] = char
                onUpdatePlayer(player)
              }}
              onUpdateKeystone={(data) => {
                player.characters[idx].keystone = data
                onUpdatePlayer(player)
              }}
              onToggleActive={() => {
                player.characters[idx].active = !player.characters[idx].active
                onUpdatePlayer(player)
              }}
            />
          ))}
          <AddNewCharacterBadge onClick={() => setShowModal(true)} />
          <EditCharacterModal
            mode={'create'}
            open={showModal}
            onClose={() => setShowModal(false)}
            onSave={handleAddCharacter}
          />
        </div>
      </div>
    </div>
  )
}
