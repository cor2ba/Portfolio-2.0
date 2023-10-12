import Exit from "@/assests/images/exit.png"
import Image from "next/image"
import { Modal } from "@/types/interfaces"
import Me from "@/assests/images/me2.png"

export default function AboutMeModal ({ modalAboutMe, setAboutMe }: Modal) {
    return (
        <div className={`${container} ${!modalAboutMe && "hidden"} [&>img:nth-child(1)]:w-[400px] [&>img:nth-child(1)]:rounded-[16px] [&>img:nth-child(1)]:m-2 [&>img:nth-child(1)]:border-white [&>img:nth-child(1)]:border-[10px]`}>
            <Image src={Me} alt="Image"></Image>
            <div className="flex flex-col justify-center items-start text-center mt-3 mr-3 gap-5 [&>p]:text-white [&>p]:text-start [&>p]:text-xl [&>p]:s:text-lg [&>p]:font-mono">
                <p>I graduated of Full-Stack developer web in Henry Bootcamp 💻</p>
                <p>I worked as an assistant professor at Henry 💛</p>
                <p>I worked as an Front End Developer at CrESI 💜</p>
                <p>Actually working at Neuron Health as Front End Developer 💙</p>
                <p>I live in Argentina, Buenos Aires 🤍</p>
                <p>Studying programming for more than 3 years 🔱</p>
            </div>
            <Image onClick={() => setAboutMe(false)} className="absolute right-0 top-0 p-2 cursor-pointer" src={Exit} alt="Image"></Image>
        </div>
    )
}

const container = "flex gap-5 p-8 bg-[#0000009] flex-wrap gap-5 w-full justify-center items-center rounded-[16px] shadow-[rgba(30,_30,_26,_0.4)_2px_2px_8px_4px]"