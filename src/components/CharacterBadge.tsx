import { CheckCircle, Circle } from 'lucide-react'

import { Character } from '../models/Character'

interface CharacterBadgeProps {
  char: Character
  onToggleActive: () => void
}

export const CharacterBadge = ({ char, onToggleActive }: CharacterBadgeProps) => {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-lg transition-all
        ${char.active ? 'bg-green-700/30 text-white' : 'bg-zinc-700 text-zinc-400'}`}
    >
      <div className="flex flex-col text-sm">
        <span className="font-semibold text-white">
          {char.name} • {char.realm}
        </span>
        <span className="text-xs">
          {char.spec} {char.class} • {char.role}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className={`text-xs px-2 py-1 rounded border border-zinc-600 bg-zinc-700`}>
          +{char.keystone.level} {char.keystone.dungeon}
        </span>

        <button
          onClick={onToggleActive}
          className="text-green-400 hover:bg-white/10 p-1 rounded-[50%] cursor-pointer transition-colors"
          title={char.active ? 'Deaktivieren' : 'Aktivieren'}
        >
          {char.active ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
        </button>
      </div>
    </div>
  )
}
