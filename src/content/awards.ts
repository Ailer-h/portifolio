import SIC from "../assets/logos/SIC.webp"
import feiraPaulista from "../assets/logos/feiraPaulista.webp"

export interface Award {

    name: string
    issuingOrg: string
    issueDate: Date
    logo: string
    headline?: string

}

export const awards: Award[] = [
    {
        name: "awards.outstandingStudent.name",
        issuingOrg: "Samsung Innovation Campus",
        issueDate: new Date(2022, 11),
        headline: "awards.outstandingStudent.headline",
        logo: SIC
    },
    {
        name: "awards.firstPlaceEngineering.name",
        issuingOrg: "Feira Paulista de Ciência e Tecnologia",
        headline: "awards.firstPlaceEngineering.headline",
        issueDate: new Date(2021, 11),
        logo: feiraPaulista
    },
]