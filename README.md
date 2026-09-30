# 🌅 Dawn Discord Formatter

A simple and sleek web tool for building and formatting M+ teams for the Dawn WoW boosting community.

## 🎮 Demo
[Dawn Discord Formatter](https://dawn-formatter.michael-isler.com/)

*https://dawn-formatter.michael-isler.com/*

---

## ✨ Features

- 🧙‍♂️ Add multiple **players** with one or more **characters**
- 📌 Mark **active characters** and set **Keystones**, **iLvl**, **Specs**, and more
- 🛠️ Customize **Armor Tradeability**, **Roles**, and **Factions**
- 🧠 Smart formatting with consistent layout for **Discord Markdown**
- 🌐 Switch between multiple **Teams**
- 📤 Copy and paste the formatted result directly into Discord

---


## 🔧 How to Use

1. 🔽 Open the web app
2. ➕ Add new players and characters
3. 🧙 Set details like class, role(s), ilvl, keystone and armor trade
4. 🌍 Switch output language if needed
5. 📤 Copy the formatted message and paste it into Discord

---

## 🌍 Internationalization

- 🔁 Supports multiple **languages**
- 🇺🇸 🇩🇪 Choose different output and UI languages independently

---

## 💾 Storage

- 🧠 Everything is saved in your **local browser storage**
- 🔄 Teams and configurations persist even after a reload

---

## 🚀 Getting Started

1. Clone the repo  
   `git clone https://github.com/your-username/dawn-discord-formatter.git`

2. Install dependencies  
   `npm install`

3. Run the development server  
   `npm run dev`

4. Open your browser at  
   `http://localhost:5173`

---

## 🗓️ Updating for a New Season

Current dungeon pool: **Midnight Season 2** (Altar of Fangs, Murder Row, Den of Nalorakk, The Blinding Vale, Voidscar Arena, King's Rest, Temple of Sethraliss, Ruby Life Pools).

All season-specific data lives in `src/data/Dungeons.ts`:

1. Move dungeons leaving the rotation from `DungeonId` to `LegacyDungeonId` (keep their id strings)
2. Add the new dungeons to `DungeonId` and `useDungeonTranslations`
3. Add the translation keys to `src/locales/*.json`
4. Point `DEFAULT_DUNGEON` to a dungeon of the new season

Saved characters are never modified. Keystones from past seasons stay in storage, are highlighted as outdated in the UI and default to the new season when edited.

---

## 🛠 Tech Stack

- ⚛️ React + TypeScript
- 💨 Tailwind CSS
- 🌐 i18next
- ⚙️ Vite

---

## 📦 Build for Production

```
npm run build
```

Output will be in the `/dist` folder.

---

## 📁 Hosting

You can host the output `/dist` folder on:
- 🧑‍💻 Webspace
- 🔧 Nginx/Apache
- 🌍 Any static file host (e.g., GitHub Pages, Vercel, Netlify)

---

## 📬 Feedback & Contributions

Feel free to open issues or submit pull requests!

---

## ©️ License

Copyright (c) 2025 Michael Isler

You are permitted to view, run, and contribute to this code for personal or non-commercial use.

You may not:

Copy, fork, or redistribute this code or any modified versions
Use it in any public or commercial product
Publish or host it elsewhere
All rights remain with the original author. Contributions are welcome but may be included under the same license or a future license chosen by the author.

For inquiries about usage beyond these terms, please contact info@michael-isler.com
