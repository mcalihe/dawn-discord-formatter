import { UserRound } from 'lucide-react'

import { Player } from '../models/Player'

type PlayerCardProps = { player: Player }

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className={'card'}>
      <div className={'flex flex-row gap-2'}>
        <UserRound className="w-6 h-6" />
        <h2 className="text-sm font-medium">{player.name}</h2>
      </div>
    </div>
  )
}
