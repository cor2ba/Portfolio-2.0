export interface Modal {
    modalTechs?: boolean,
    modalAboutMe?: boolean,
    modalProjects?: boolean,
    setTechs: React.Dispatch<React.SetStateAction<boolean>>,
    setAboutMe: React.Dispatch<React.SetStateAction<boolean>>,
    setProjects: React.Dispatch<React.SetStateAction<boolean>>,
}