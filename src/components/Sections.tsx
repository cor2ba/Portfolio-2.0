import { about, download, projects, henry } from "@/assests/icons"
import Image from "next/image"
import { techsMain } from "@/assests/techs"
import { Tooltip } from 'react-tooltip'
import { Modal } from "@/types/interfaces"

export default function Sections ({ setTechs, setAboutMe, setProjects, modalTechs, modalAboutMe, modalProjects }: Modal) {
    return (
        <>
            <section className={`flex gap-5 flex-wrap items-center justify-center ${(modalTechs || modalAboutMe || modalProjects) && "hidden"}`}>
                <div className={`${bigComponent} ${border}`}>
                    <h2 className={name}>Gabriel Córdoba</h2>
                    <p className={bigText}>{"<FrontEnd Developer />"}</p>
                </div>
                <div className="flex gap-5 m:flex-wrap m:w-full">
                    <div onClick={() => setAboutMe(true)} className={`${smallComponent} ${border}`}>
                        <Image src={about} alt="Image"></Image>
                        <p className={smallText}>About me</p>
                    </div>
                    <a
                        className={`${smallComponent} ${border}`}
                        target="_blank"
                        href="https://drive.google.com/file/d/1oAiiqkPCjQC0_Q-ja9h1Ovxhtjc6paQl/view?usp=sharing"
                        >
                        <Image src={download} alt="Image"></Image>
                        <p className={smallText}>Download CV</p>
                    </a>
                </div>
            </section>
            <section className={`flex gap-5 flex-wrap items-center justify-center ${(modalTechs || modalAboutMe || modalProjects) && "hidden"}`}>
                <div className="flex gap-5 m:flex-wrap m:w-full">
                    <div onClick={() => setProjects(true)} className={`${smallComponent} ${border}`}>
                        <Image src={projects} alt="Image"></Image>
                        <p className={smallText}>Projects</p>
                    </div>
                    <a
                        className={`${smallComponent} ${border}`}
                        target="_blank"
                        href="https://certificates.soyhenry.com/cert?id=d8d54cb0-1a66-4aa5-9e23-61d889125069"
                        >
                            <Image src={henry} alt="Image"></Image>
                            <p className={smallText}>Henry Diploma</p>
                    </a>
                </div>
                <div className={`${bigComponent} ${border} !flex-row flex-wrap gap-5 m:h-full`}>
                    {techsMain.map((t, index) => (
                        <div key={index}>
                            {t.name === "View All" ? 
                             <div onClick={()=>setTechs(true)} className="flex flex-col cursor-pointer justify-center items-center text-center h-[90px] w-[90px]">
                                 <p className={viewMoreText}>View more</p>
                             </div> :
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={t.name} className="flex flex-col justify-between items-center text-center w-[90px]">
                                <Image src={t.image} width={100} alt="Image"></Image>
                                <Tooltip id="my-tooltip" />
                            </div>
                            }
                        </div>                 
                    ))}
                </div>
            </section>
        </>
    )
}

const name = "text-medium text-[#ffffff] h-[100px] flex items-center font-semibold justify-center text-5xl m:text-4xl xs:!text-3xl text-center"
const border = "shadow-[rgba(30,_30,_26,_0.4)_2px_2px_8px_4px] hover:shadow-[rgba(255,255,255,_0.4)_2px_2px_8px_4px]"
const smallComponent = "flex flex-col w-[240px] h-[240px] bg-[#0000009] cursor-pointer m:w-full items-center justify-center rounded-[16px] p-4 [&>img]:w-[100px] [&>img]:h-[100px]"
const smallText = "font-light text-[#ffffffb2] text-3xl text-center"
const viewMoreText = "font-light text-[#ffffffb2] text-[18px] text-center"
const bigComponent = "flex flex-col w-[500px] h-[240px] bg-[#0000009] m:w-full items-center justify-center rounded-[16px] p-4 [&>img]:w-[100px] [&>img]:h-[100px]"
const bigText = "font-light	text-[#ffffffb2] text-3xl text-center m:text-2xl xs:!text-xl"