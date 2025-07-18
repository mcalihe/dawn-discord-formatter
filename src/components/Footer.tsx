import { Github } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="mt-10 py-4 text-center text-sm text-zinc-500 border-t border-zinc-700">
      <p className="flex justify-center items-center gap-2">
        <span>&copy; {new Date().getFullYear()} Michael Isler</span>
        <a
          href="https://github.com/mcalihe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-400 hover:underline"
        >
          <Github className="w-4 h-4" />
          <span>@mcalihe</span>
        </a>
      </p>
    </footer>
  )
}
