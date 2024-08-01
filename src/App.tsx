import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Progressbar } from './components/progressbar'
import { Card } from './components/card'

export function App() {
  return (
    <main className="mx-auto flex max-w-screen-xl flex-col justify-center space-y-20 px-6 py-20">
      <div className="flex flex-wrap-reverse justify-center md:justify-between">
        <div className="mt-6 flex flex-col flex-wrap justify-center space-y-8 text-center md:justify-normal md:text-left">
          <p className="text-5xl">
            Hi,I<strong className="text-teal-300">'</strong>
          </p>
          <h1 className="animate-pulse bg-gradient-to-r from-teal-300 to-zinc-400 bg-clip-text text-5xl text-teal-300 text-transparent">
            Cristian Jucoski
          </h1>
          <p className="text-5xl">Front-end Developer</p>
          <div className="flex flex-wrap justify-center gap-6 md:justify-normal">
            <a
              href="/cv.pdf"
              target="_blank"
              className="flex w-56 cursor-pointer justify-center gap-2 rounded-3xl bg-teal-300 py-4 text-zinc-900 hover:bg-teal-500">
              Dowload CV
              <ArrowRight />
            </a>
            <div className="flex gap-6">
              <a
                target="_blanck"
                href="https://github.com/JucoskiCristian"
                className="flex h-14 w-14 items-center justify-center rounded-full text-teal-300 ring-2 ring-teal-300 hover:bg-teal-300 hover:text-zinc-900">
                <Github />
              </a>
              <a
                target="_blanck"
                href="https://www.linkedin.com/in/cristian-jucoski/"
                className="flex w-14 items-center justify-center rounded-full text-teal-300 ring-2 ring-teal-300 hover:bg-teal-300 hover:text-zinc-900">
                <Linkedin />
              </a>
              <a
                target="_blanck"
                href="mailto:cristian.jucoski@gmail.com"
                className="flex w-14 items-center justify-center rounded-full text-teal-300 ring-2 ring-teal-300 hover:bg-teal-300 hover:text-zinc-900">
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute top-28 -z-10 h-40 w-40 bg-teal-400 blur-[100px]" />
          <div className="h-80 w-80 rounded-full bg-teal-600 bg-pattern bg-contain bg-center bg-no-repeat"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-8 text-center">
        <h1 className="text-5xl">About me</h1>
        <p className="mx-auto max-w-[500px] text-zinc-400">
          I'm a front-end developer passionate about creating beautiful and
          interactive interfaces that deliver great user experiences.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-5xl">Skills</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <Progressbar name="Html5" rate={80} id="html" />
          <Progressbar name="Css3" rate={80} id="css" />
          <Progressbar name="JavaScript" rate={80} id="js" />
          <Progressbar name="TypeScript" rate={60} id="ts" />
          <Progressbar name="ReactJs" rate={70} id="react" />
          <Progressbar name="TailwindCSS" rate={80} id="tailwind" />
          <Progressbar name="Figma" rate={50} id="figma" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-5xl">Projects</h1>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Card
            name="Trip Planner"
            description="Platform for collaborative group travel planning. Developed during the Nlw Journey"
            technology="React.ts , Tailwind.css"
            link="https://github.com/JucoskiCristian/nlw-journey-react"
            background="bg-tripplann"
          />
          <Card
            name="Pokedex"
            description="Platform to check all Pokémon and their stats, through the consumption of the PokéAPI."
            technology="React.ts , Css3"
            link="https://github.com/JucoskiCristian/PokedexReact"
            background="bg-pokedex"
          />
          <Card
            name="Khapa Spa"
            description="Website created for spa called Khapa, showcasing its services, qualities with a modern design."
            technology="WordPress , Elementor"
            link="https://github.com/JucoskiCristian/SpaKhapa"
            background="bg-khapa"
          />
        </div>
      </div>
    </main>
  )
}
