import Exit from "@/assests/images/exit.png"
import Image from "next/image"
import { Modal } from "@/types/interfaces"
import { projects } from "@/assests/projects"
import link from "@/assests/images/link.png"
import github from "@/assests/images/github.png"

export default function ProjectsModal({ modalProjects, setProjects }: Modal) {
    return (
        <div className={`${container} ${!modalProjects && "hidden"}`}>
            {projects.map((p, index) => (
                <div key={index} className="relative flex h-[200px] w-[330px] l:w-[264px] l:h-[160px] s:!w-[231px] s:!h-[140px] [&>img]:w-full [&>img]:h-full [&>img]:rounded-lg">
                    <Image alt="" src={p.image}></Image>
                    <a target="_blank" href={p.url}>
                        <Image className={`${media} right-0`} alt="Link" src={link} />
                    </a>
                    {p.repository && <a target="_blank" href={p.repository}>
                        <Image className={`${media} left-0`} alt="GitHub" src={github} />
                    </a>}
                    <p className="absolute bottom-0 right-0 left-0 flex items-center justify-center font-sans text-white bg-black rounded-b-lg">{p.name}</p>
                </div>
            ))}
            <Image onClick={() => setProjects(false)} className="absolute right-0 top-0 p-2 cursor-pointer" src={Exit} alt="Image"></Image>
        </div>
    )
}

const container = "flex gap-5 p-8 flex-wrap gap-5 w-full s:pt-11 xxs:px-4 justify-center items-center rounded-[16px] shadow-[rgba(30,_30,_26,_0.4)_2px_2px_8px_4px]"
const media = "!w-[50px] !h-[50px] m-1 rounded-lg bg-black absolute top-0 z-50 cursor-pointer"