import Exit from "@/assests/images/exit.webp"
import Image from "next/image"
import { Modal } from "@/types/interfaces"
import { techs } from "@/assests/techs"
import { Tooltip } from 'react-tooltip'

export default function TechsModal({ modalTechs, setTechs }: Modal) {
    return (
        <div className={`${container} ${!modalTechs && "hidden"}`}>
            <h2 className="w-full text-center text-2xl font-bold text-white mb-6">
                Tecnologías y Herramientas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {techs.map((t, index) => (
                    <div
                        key={index}
                        className="tech-card group relative flex flex-col items-center justify-center p-4 bg-[#ffffff0d] rounded-lg hover:bg-[#ffffff1a] transition-all duration-300"
                    >
                        <Image
                            src={t.image}
                            width={80}
                            height={80}
                            alt={t.name}
                            className="group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="mt-2 text-sm text-white text-center group-hover:scale-110 transition-transform duration-300">
                            {t.name}
                        </span>
                    </div>
                ))}
            </div>
            <Image 
                onClick={() => setTechs(false)} 
                className="absolute right-4 top-4 p-2 cursor-pointer hover:rotate-90 transition-transform" 
                src={Exit} 
                alt="Cerrar"
            />
            <Tooltip id="my-tooltip" />
        </div>
    )
}

const container = `
    flex flex-col relative
    max-w-[1020px] w-[90%]
    p-8 md:p-10
    bg-[#000000f2] 
    rounded-[16px]
    shadow-[rgba(30,_30,_26,_0.4)_2px_2px_8px_4px]
    z-50
`