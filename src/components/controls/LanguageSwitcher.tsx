import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/gb.svg' },
  { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/de.svg' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = languages.find((l) => l.code === i18n.language) ?? languages[0]

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  return (
    <Menu>
      <MenuButton className="h-8 w-10 p-1 rounded-md bg-white/5 hover:ring-1 ring-blue-400 transition cursor-pointer aspect-[4/3]">
        <div className="w-full h-full overflow-hidden rounded-sm">
          <img src={current.flag} alt={current.code} className="w-full h-full object-cover" />
        </div>
      </MenuButton>

      <MenuItems
        anchor="bottom"
        className="z-50 mt-2 rounded-md border border-white/10 bg-zinc-900/90 backdrop-blur p-1 shadow-xl"
      >
        {languages.map((language) => (
          <MenuItem key={language.code}>
            {({ active }) => (
              <button
                onClick={() => handleChange(language.code)}
                className={clsx(
                  'w-full flex items-center gap-2 p-1 rounded-md transition cursor-pointer',
                  i18n.language === language.code && 'ring-1 ring-blue-500',
                  active && 'bg-blue-500/10'
                )}
              >
                <div className="w-6 aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={language.flag}
                    alt={language.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-white">{language.name}</span>
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
