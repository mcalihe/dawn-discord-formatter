import { User } from 'lucide-react'

export const PlayerCard = ({ id }: { id: number }) => {
  return (
    <li className="min-w-[250px] bg-white rounded-xl shadow p-4 flex-shrink-0">
      <div className="flex items-center gap-2 mb-2 text-gray-800">
        <User className="w-5 h-5" />
        <h3 className="text-lg font-bold">Spieler {id}</h3>
      </div>
      <span className="text-gray-500 italic">Noch kein Inhalt</span>
    </li>
  )
}
