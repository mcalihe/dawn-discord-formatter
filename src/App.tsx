import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AddNewPlayerCard } from './components/cards/AddNewPlayerCard'
import { PlayerCard } from './components/cards/PlayerCard'
import { FloatingSelect } from './components/controls/FloatingSelect'
import { Language, languages, LanguageSwitcher } from './components/controls/LanguageSwitcher'
import { Footer } from './components/Footer'
import { MarkdownOutput } from './components/MarkdownOutput'
import { EditPlayerModal } from './components/modals/EditPlayerModal'
import { useArmorSlotTranslations } from './data/AmorSlot'
import { Class, useClassTranslations } from './data/Class'
import { DungeonId } from './data/Dungeons'
import { Faction } from './data/Faction'
import { Role } from './data/Roles'
import { Spec } from './data/Specs'
import { CURRENT_TEAM, TEAMS } from './data/StorageKeys'
import { Teams } from './data/Teams'
import i18nOutput from './i18nOutput'
import { Player } from './models/Player'
import { DiscordFormatService } from './services/DiscordFormatService'

const NEW_TEAM_NAME = 'New Team'

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
          rioScore: 3300,
          active: true,
          class: Class.Hunter,
          iLvl: 682,
          keystoneAvailable: true,
          keystone: { dungeon: DungeonId.ML, level: 12 },
          tradeAllArmor: true,
          cantTrade: [],
          roles: [Role.DPS],
          faction: Faction.Horde,
          source: 'manual',
          specs: [Spec.Marksmanship],
        },
      ],
    },
  ]

  let loadedTeams: Teams
  let currentTeam = NEW_TEAM_NAME

  try {
    const localTeam = localStorage.getItem(TEAMS)
    const localCurrentTeam = localStorage.getItem(CURRENT_TEAM)
    console.log('test', localTeam)
    loadedTeams = localTeam ? JSON.parse(localTeam) : []
    const teamKeys = Object.keys(localCurrentTeam ?? {})

    const firstLocalTeamKey = teamKeys.length > 0 ? teamKeys[0] : undefined
    currentTeam = localCurrentTeam || firstLocalTeamKey || NEW_TEAM_NAME
  } catch (e) {
    loadedTeams = {}
  }

  if (Object.keys(loadedTeams).length <= 0) {
    loadedTeams[NEW_TEAM_NAME] = []
  }

  console.log(loadedTeams)

  const { t } = useTranslation()
  const [teams, setTeams] = useState<Teams>(loadedTeams)
  const [currentTeamKey, setCurrentTeamKey] = useState<string>(currentTeam)
  const [players, setPlayers] = useState<Player[]>(teams[currentTeamKey])
  const [output, setOutput] = useState<string>()
  const [outputLanguage, setOutputLanguage] = useState<Language>(languages[0])
  const [showModal, setShowModal] = useState(false)
  const [team, setTeam] = useState<string>('new team')
  const AddNewPlayer = (name: string, discord?: string) => {
    const highestId = Math.max(...players.map((o) => o.id))
    const newId = highestId != -Infinity ? highestId + 1 : 0
    setPlayers([...players, { id: newId, name: name, discord: discord, characters: [] }])
  }

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))
  }, [players])

  const outputTranslator = useMemo(() => {
    i18nOutput.changeLanguage(outputLanguage.code)
    return i18nOutput.t.bind(i18nOutput)
  }, [outputLanguage])
  const classTranslations = useMemo(
    () => useClassTranslations(outputTranslator),
    [outputTranslator]
  )
  const armorSlotTranslations = useMemo(
    () => useArmorSlotTranslations(outputTranslator),
    [outputTranslator]
  )

  useEffect(() => {
    i18nOutput.changeLanguage(outputLanguage.code).then(() => {
      setOutput(
        DiscordFormatService.formatTeam(
          players,
          classTranslations,
          armorSlotTranslations,
          outputTranslator
        )
      )
    })
  }, [players, outputLanguage])

  return (
    <div className={'flex flex-col w-full flex-1 gap-8'}>
      <div className={'flex flex-col gap-8'}>
        <div className={'flex flex-row justify-between w-full gap-8'}>
          <h1>Dawn Discord Formatter</h1>
          <div className={'flex flex-row items-center gap-4'}>
            <FloatingSelect
              id="team-select"
              label={t('team.name.label')}
              value={team}
              className={'w-50'}
              onChange={(e) => setTeam(e.target.value)}
              options={Object.keys(teams).map((key) => ({
                value: key,
                label: key,
              }))}
              required={true}
            />
            <LanguageSwitcher isGlobal={true} />
          </div>
        </div>
        <div className={'flex flex-row min-h-[30rem] gap-2'}>
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onUpdatePlayer={() => {
                console.log('update', player)
                const idx = players.findIndex((p) => {
                  return p.id === player.id
                })

                if (idx >= 0 && players.length > idx) {
                  players[idx] = player
                  setPlayers([...players])
                }
              }}
              onDeletePlayer={() => {
                console.log('Deleting player', player)
                const idx = players.findIndex((p) => {
                  return p.id === player.id
                })

                if (idx >= 0 && players.length > idx) {
                  players.splice(idx, 1)
                  setPlayers([...players])
                }
              }}
            />
          ))}
          {players.length < 4 && <AddNewPlayerCard onClick={() => setShowModal(true)} />}

          <EditPlayerModal
            open={showModal}
            onClose={() => setShowModal(false)}
            mode={'create'}
            onSave={(data) => AddNewPlayer(data.name, data.discord)}
          />
        </div>
      </div>

      <div>
        <div className={'flex flex-row justify-between gap-4'}>
          <h2>Output</h2>
          <LanguageSwitcher
            isGlobal={false}
            currentLanguage={outputLanguage}
            onLngChange={setOutputLanguage}
          />
        </div>

        <MarkdownOutput value={output} />
      </div>
      <Footer />
    </div>
  )
}
