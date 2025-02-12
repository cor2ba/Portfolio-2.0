import Exit from "@/assests/images/exit.webp"
import Image from "next/image"
import { Modal } from "@/types/interfaces"
import Me from "@/assests/images/me.webp"

export default function AboutMeModal({ modalAboutMe, setAboutMe }: Modal) {
    const texts = [
        {
            category: "Experiencia Profesional",
            items: [
                <span>I worked as an assistant professor at <a className="text-black font-extrabold bg-[#ff0] hover:bg-[#ffd700] transition-colors px-2 rounded-full" href="https://www.cresi.com.ar/">HENRY</a></span>,
                <span>I worked as an Front End Developer at <a className="text-white font-extrabold bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors px-2 rounded-full" href="https://www.cresi.com.ar/">CRESI</a></span>,
                <span>Actually working as Front End Developer at <a className="text-white font-extrabold bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors px-2 rounded-full" href="https://www.viradoctores.com/">NEURON HEALTH</a></span>,
            ]
        },
        {
            category: "Educación",
            items: [
                "I graduated of Full-Stack developer web in Henry Bootcamp",
                "Studying programming for more than 3 years",
                <span>I studied English 4 years at <a className="text-white font-extrabold bg-[#26316F] hover:bg-[#1a224f] transition-colors px-2 rounded-full" href="https://www.instagram.com/inglesdenver_/?hl=es">INSTITUTO DE LENGUA INGLESA DENVER</a></span>,
            ]
        },
        {
            category: "Sobre mí",
            items: [
                "Autodidact, creative, ingenius and enthusiastic",
                "I live in Argentina, Buenos Aires",
            ]
        }
    ]

    return (
        <div className={`${container} ${!modalAboutMe && "hidden"}`}>
            <div className="flex flex-col justify-center items-start w-full max-w-2xl gap-6">
                {texts.map((section, index) => (
                    <div key={index} className="w-full">
                        <h3 className="text-2xl font-bold text-white mb-3 border-b border-white/20 pb-2">{section.category}</h3>
                        <div className="flex flex-col gap-3">
                            {section.items.map((text, idx) => (
                                <p key={idx} className="text-white text-lg font-mono hover:translate-x-2 transition-transform">{text}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative">
                <Image 
                    src={Me} 
                    className="w-[400px] rounded-full border-white border-[10px] hover:scale-105 transition-transform bg-[rgba(30,_30,_26,_0.4)]" 
                    alt="Profile picture"
                />
            </div>
            <Image 
                onClick={() => setAboutMe(false)} 
                className="absolute right-4 top-4 p-2 cursor-pointer hover:rotate-90 transition-transform" 
                src={Exit} 
                alt="Close modal"
            />
        </div>
    )
}

const container = "flex gap-8 p-8 bg-[#000000e6] xl:flex-col-reverse w-full max-w-[1200px] justify-between items-center rounded-[16px] shadow-[rgba(30,_30,_26,_0.4)_2px_2px_8px_4px] relative"