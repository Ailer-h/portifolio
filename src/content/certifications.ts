import Google from "../assets/logos/google.webp"
import SIC from "../assets/logos/SIC.webp"
import Cisco from "../assets/logos/cisco.webp"

export interface Certification {

    name: string,
    issuingOrg: string,
    issueDate: Date
    logo: string
    expirationDate?: Date
    credentialURL?: string

}

export const certifications: Array<Certification> = [
    {
        name: "Python and AI Introduction Certification",
        issuingOrg: "Samsung Innovation Campus",
        issueDate: new Date(2022, 11),
        logo: SIC
    },
    {
        name: "Python Essentials 1",
        issuingOrg: "Cisco",
        issueDate: new Date(2023, 4),
        credentialURL: "https://www.credly.com/badges/100fca4b-6cd9-49b9-8278-275e3945f7cd/linked_in_profile",
        logo: Cisco
    },
    {
        name: "Prepare Data for ML APIs on Google Cloud Skill Badge",
        issuingOrg: "Google",
        issueDate: new Date(2024, 11),
        credentialURL: "https://www.credly.com/badges/ca2dd780-f3ff-4105-8899-055bc36bbde2/linked_in_profile",
        logo: Google
    }
]