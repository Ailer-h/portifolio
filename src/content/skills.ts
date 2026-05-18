export interface Skill {
    skill: string
    level: {
        label: string
        cefr?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
        number: number
    }
}

export const skills: Record<string, Skill[]> = {

    programmingLanguages: [
        {
            skill: "Python",
            level: {
                label: "Advanced",
                number: 5
            }
        },
        {
            skill: "PHP",
            level: {
                label: "Advanced",
                number: 5
            }
        },
        {
            skill: "Typescript",
            level: {
                label: "Intermediate",
                number: 4
            }
        },
        {
            skill: "JavaScript",
            level: {
                label: "Intermediate",
                number: 4
            }
        },
        {
            skill: "Java",
            level: {
                label: "Intermediate",
                number: 4
            }
        },
        {
            skill: "C++",
            level: {
                label: "Intermediate",
                number: 4
            }
        },
    ],

    techAndFrameworks: [
        {
            skill: "HTML",
            level: {
                label: "Advanced",
                number: 5
            }
        },
        {
            skill: "CSS",
            level: {
                label: "Advanced",
                number: 5
            }
        },
        {
            skill: "Bootstrap",
            level: {
                label: "Intermediate",
                number: 4
            }
        },
        {
            skill: "jQuery",
            level: {
                label: "Advanced",
                number: 5
            }
        },
        {
            skill: "React.js",
            level: {
                label: "Intermediate",
                number: 3
            }
        },
        {
            skill: "FastAPI",
            level: {
                label: "Basic",
                number: 1
            }
        },
        {
            skill: "Django",
            level: {
                label: "Basic",
                number: 1
            }
        },
    ],

    devopsAndTooling: [
        {
            skill: "Git",
            level: {
                label: "Advanced",
                number: 5
            }
        },
        {
            skill: "Docker",
            level: {
                label: "Begginer",
                number: 2
            }
        },
    ],

    languages: [
        {
            skill: "Portuguese",
            level: {
                label: "Fluent",
                cefr: "C2",
                number: 5
            }
        },
        {
            skill: "English",
            level: {
                label: "Advanced",
                cefr: "C1",
                number: 5
            }
        },
        {
            skill: "Italian",
            level: {
                label: "Intermediate",
                cefr: "B1",
                number: 3
            }
        },
        {
            skill: "Spanish",
            level: {
                label: "Basic",
                cefr: "A2",
                number: 2
            }
        },
    ]

}