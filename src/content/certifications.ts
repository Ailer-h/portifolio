export interface certification {

    name: string,
    issuingOrg: string,
    issueDate: Date
    expirationDate?: Date
    credentialURL?: string

}

export const certifications: Array<certification> = [
    {
        name: "Python and AI Introduction Certification",
        issuingOrg: "Samsung Innovation Campus",
        issueDate: new Date(2022, 12)
    },
    {
        name: "Python Essentials 1",
        issuingOrg: "Cisco",
        issueDate: new Date(2023, 5)
    },
    {
        name: "Prepare Data for ML APIs on Google Cloud Skill Badge",
        issuingOrg: "Google",
        issueDate: new Date(2024, 12),
        credentialURL: "https://www.credly.com/badges/ca2dd780-f3ff-4105-8899-055bc36bbde2/linked_in_profile"
    },
]