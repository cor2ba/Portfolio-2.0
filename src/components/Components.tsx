import { TechsModal, AboutMeModal , ProjectsModal } from "./modals"
import { useState } from "react"
import Sections from "./Sections"

export default function Components () {
    const [modalTechs, setModalTechs] = useState<boolean>(false)
    const [modalAboutMe, setModalAboutMe] = useState<boolean>(false)
    const [modalProjects, setModalProjects] = useState<boolean>(false)

    return (
        <div className={`flex flex-col gap-5 m-4 mb-20 ${animation}`}>
            <Sections setTechs={setModalTechs} setAboutMe={setModalAboutMe} setProjects={setModalProjects} modalTechs={modalTechs} modalAboutMe={modalAboutMe} modalProjects={modalProjects} />
            <TechsModal modalTechs={modalTechs} setTechs={setModalTechs} setAboutMe={setModalAboutMe} setProjects={setModalProjects} />
            <AboutMeModal modalAboutMe={modalAboutMe} setTechs={setModalTechs} setAboutMe={setModalAboutMe} setProjects={setModalProjects} />
            <ProjectsModal modalProjects={modalProjects} setTechs={setModalTechs} setAboutMe={setModalAboutMe} setProjects={setModalProjects} />
        </div>
    )
}

const animation = "animate-jump-in animate-once animate-duration-[2000ms] animate-delay-100 animate-ease-in-out animate-normal"