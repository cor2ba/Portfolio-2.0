import Exit from "@/assests/images/exit.webp"
import Image from "next/image"
import { Modal } from "@/types/interfaces"
import { projects } from "@/assests/projects"
import link from "@/assests/images/link.webp"
import github from "@/assests/images/github.webp"

export default function ProjectsModal({ modalProjects, setProjects }: Modal) {
    return (
        <div className={`${container} ${!modalProjects && "hidden"}`}>
            {projects.map((p, index) => (
                <div key={index} className="group relative h-[200px] w-[330px] l:w-[264px] l:h-[160px] s:!w-[231px] s:!h-[140px] overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
                    <Image 
                        alt={p.name} 
                        src={p.image}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute top-3 right-3 flex gap-3">
                            <a 
                                target="_blank" 
                                href={p.url}
                                className="bg-black/90 p-2 rounded-lg hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1"
                            >
                                <Image className="w-6 h-6" alt="Link" src={link} />
                            </a>
                            {p.repository && (
                                <a 
                                    target="_blank" 
                                    href={p.repository}
                                    className="bg-black/90 p-2 rounded-lg hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Image className="w-6 h-6" alt="GitHub" src={github} />
                                </a>
                            )}
                        </div>
                        <div className="absolute bottom-0 w-full p-4">
                            <h3 className="text-white font-bold text-lg">{p.name}</h3>
                        </div>
                    </div>
                </div>
            ))}
            <Image 
                onClick={() => setProjects(false)} 
                className="absolute right-4 top-4 p-2 cursor-pointer hover:rotate-90 transition-transform" 
                src={Exit} 
                alt="Cerrar"
            />
        </div>
    )
}

const container = "flex bg-[#000000e6] max-w-[1500px] gap-5 p-8 flex-wrap gap-5 w-full s:pt-11 xxs:px-4 justify-center items-center rounded-[16px] shadow-[rgba(30,_30,_26,_0.4)_2px_2px_8px_4px]"