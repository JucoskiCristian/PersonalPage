import { Github } from 'lucide-react'

interface CardProps {
  name: string
  description: string
  technology: string
  link: string
  background: string
}

export function Card({
  name,
  description,
  technology,
  link,
  background
}: CardProps) {
  return (
    <div className="h-[470px] w-64 rounded-2xl bg-zinc-800">
      <div
        className={
          'h-48 rounded-t-2xl bg-cover bg-center bg-no-repeat ' + background
        }></div>
      <h1 className="m-5 text-2xl font-semibold text-zinc-100">{name}</h1>
      <p className="mx-5 text-xs text-zinc-400">{description}</p>
      <p className="m-5 text-teal-300">{technology}</p>
      <a
        target="_blanck"
        href={link}
        className="m-5 flex w-32 cursor-pointer justify-center gap-2 rounded-2xl bg-teal-300 py-2 text-zinc-800">
        <Github />
        Github
      </a>
    </div>
  )
}
