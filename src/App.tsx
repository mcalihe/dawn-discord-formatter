import { AddNewPlayerCard } from './components/AddNewPlayerCard'

export default function App() {
  return (
    <div className={'flex flex-col gap-8'}>
      <h1>Dawn Discord Formatter</h1>
      <div className={'flex flex-row min-h-[30rem]'}>
        <AddNewPlayerCard />
      </div>
    </div>
  )
}
