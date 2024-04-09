import Exit from "@/assests/images/exit.png"
import Image from "next/image"
import { Modal } from "@/types/interfaces"
import { techs } from "@/assests/techs"
import { Tooltip } from 'react-tooltip'

export default function TechsModal ({ modalTechs, setTechs }: Modal) {
    return (
        <div className={`${container} ${!modalTechs && "hidden"}`}>
            {techs.map((t, index) => (
                <div key={index} className="flex justify-center items-center h-[100px] w-[100px]" data-tooltip-id="my-tooltip" data-tooltip-content={t.name} >
                    <Image src={t.image} width={100} alt="Image"></Image>
                </div>
            ))}
            <Image data-tooltip-id="my-tooltip" data-tooltip-content="View more" onClick={() => setTechs(false)} className="absolute right-0 top-0 p-2 cursor-pointer" src={Exit} alt="Image"></Image>
            <Tooltip id="my-tooltip" />
        </div>
    )
}

const container = "flex gap-5 p-10 bg-[#0000009] flex-wrap gap-5 w-full justify-center items-center rounded-[16px] shadow-[rgba(30,_30,_26,_0.4)_2px_2px_8px_4px]"