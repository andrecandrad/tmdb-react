import { Atom, GithubLogo, LinkedinLogo, DiscordLogo, Info } from "phosphor-react"

export function Header(){
    return(
        <header className="bg-slate-100 w-full min-h-16 border-b-2 border-cyan-300 flex items-center content-end">
            <div className="mx-auto max-w-2xl w-full h-full flex items-center justify-between xs:flex-col flex-wrap">
                <Atom size={52} className="text-cyan-400" />
                <h1 className="text-cyan-300 font-bold text-4xl">ReactMovies</h1>
                <nav className="flex gap-2">
                    <a href="https://github.com/andrecandrad" target={"_blank"}> <GithubLogo size={24} weight={"bold"} className="text-cyan-400 hover:opacity-50" /> </a>
                    <a href="https://www.linkedin.com/in/andrecandrad/" target={"_blank"}> <LinkedinLogo size={24} weight={"bold"} className="text-cyan-400 hover:opacity-50" /> </a>
                    <a href="" target={"_blank"}> <DiscordLogo size={24} weight={"bold"} className="text-cyan-400 hover:opacity-50" /> </a>
                    <a href=""> <Info size={24} weight={"bold"} className="text-cyan-400 hover:opacity-50" /> </a>
                </nav>
            </div>
        </header>
    ) 
}