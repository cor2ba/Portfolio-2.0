import Exit from "@/assests/images/exit.png"
import Image from "next/image"
import { Modal } from "@/types/interfaces"
import Me from "@/assests/images/me.png"

export default function AboutMeModal({ modalAboutMe, setAboutMe }: Modal) {
    const texts = [
        "I graduated of Full-Stack developer web in Henry Bootcamp",
        "Studying programming for more than 3 years",
        "I live in Argentina, Buenos Aires",
        "Passionate about the front end",
        "Autodidact, creative, ingenius and enthusiastic",
        "I worked as an assistant professor at HENRY",
        "I worked as an Front End Developer at CRESI",
        "Actually working as Front End Developer at NEURON HEALTH"
    ]
    return (
        <div className={`${container} ${!modalAboutMe && "hidden"} [&>img:nth-child(2)]:w-[400px] [&>img:nth-child(2)]:rounded-full [&>img:nth-child(2)]:m-2 [&>img:nth-child(2)]:border-white [&>img:nth-child(2)]:border-[10px]`}>
            <div className="flex flex-col justify-center items-start text-center gap-3 [&>p]:text-white [&>p]:text-start [&>p]:text-xl [&>p]:s:text-lg [&>p]:font-mono">
                {texts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
            <Image src={Me} alt="Image"></Image>
            <Image onClick={() => setAboutMe(false)} className="absolute right-0 top-0 p-2 cursor-pointer" src={Exit} alt="Image"></Image>
        </div>
    )
}

const container = "flex gap-5 p-8 bg-[#0000009] flex-wrap gap-5 w-full justify-center items-center rounded-[16px] shadow-[rgba(30,_30,_26,_0.4)_2px_2px_8px_4px]"