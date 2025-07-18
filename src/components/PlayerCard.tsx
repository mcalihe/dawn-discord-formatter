import { Trash, UserRound } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Character } from '../models/Character'
import { Player } from '../models/Player'
import { AddNewCharacterBadge } from './AddNewCharacterBadge'
import { CharacterCard } from './CharacterCard'
import { ConfirmModal } from './modals/ConfirmModal'
import { EditCharacterModal } from './modals/EditCharacterModal'

type PlayerCardProps = {
  player: Player
  onUpdatePlayer: () => void
  onDeletePlayer: () => void
}

export const PlayerCard = ({ player, onUpdatePlayer, onDeletePlayer }: PlayerCardProps) => {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false)

  const handleAddCharacter = (char: Character) => {
    player.characters = [...player.characters, char]
    onUpdatePlayer()
  }

  return (
    <div className={'card'}>
      <div className={'flex flex-col gap-4'}>
        <div className={'flex flex-row justify-between gap-2'}>
          <div className={'flex flex-row gap-2'}>
            <UserRound className="w-6 h-6" />
            <h2 className="text-sm font-medium">{player.name}</h2>
          </div>
          <button
            onClick={() => setDeleteConfirmationModalOpen(true)}
            className="p-1 h-6 w-6 rounded hover:text-white text-zinc-400 hover:bg-red-900 transition cursor-pointer"
            title={t('tooltip.deletePlayer')}
          >
            <Trash className="w-4 h-4" />
          </button>
        </div>
        <div className={'flex flex-col gap-2'}>
          {player.characters.map((char, idx) => (
            <CharacterCard
              key={idx}
              char={char}
              onUpdateChar={(char) => {
                player.characters[idx] = char
                onUpdatePlayer()
              }}
              onToggleActive={() => {
                player.characters[idx].active = !player.characters[idx].active
                onUpdatePlayer()
              }}
              onDeleteChar={() => {
                player.characters.splice(idx, 1)
                onUpdatePlayer()
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
          <ConfirmModal
            open={deleteConfirmationModalOpen}
            onClose={() => setDeleteConfirmationModalOpen(false)}
            onSave={onDeletePlayer}
            title={t('confirm.modal.delete.player.title')}
            bodyText={t('confirm.modal.delete.player.description')}
            yesLabel={t('confirm.modal.delete.player.delete')}
            noLabel={t('confirm.modal.delete.player.cancel')}
            yesBtnClassNames={'bg-red-900 hover:bg-red-700'}
          />
        </div>
      </div>
    </div>
  )
}
