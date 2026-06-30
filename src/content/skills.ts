export type LevelKey = 'fluent' | 'advanced' | 'intermediate' | 'beginner' | 'basic'

export interface Skill {
    skill: string
    translationKey?: string
    level: {
        label: LevelKey
        cefr?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
        number: number
    }
}

export const skills: Record<string, Skill[]> = {

    programmingLanguages: [
        {
            skill: "Python",
            level: {
                label: "advanced",
                number: 5
            }
        },
        {
            skill: "PHP",
            level: {
                label: "intermediate",
                number: 4
            }
        },
        {
            skill: "Typescript",
            level: {
                label: "advanced",
                number: 5
            }
        },
        {
            skill: "JavaScript",
            level: {
                label: "advanced",
                number: 5
            }
        },
        {
            skill: "Java",
            level: {
                label: "intermediate",
                number: 4
            }
        },
        {
            skill: "C++",
            level: {
                label: "intermediate",
                number: 4
            }
        },
    ],

    techAndFrameworks: [
        {
            skill: "HTML",
            level: {
                label: "advanced",
                number: 5
            }
        },
        {
            skill: "CSS",
            level: {
                label: "advanced",
                number: 5
            }
        },
        {
            skill: "Bootstrap",
            level: {
                label: "intermediate",
                number: 4
            }
        },
        {
            skill: "jQuery",
            level: {
                label: "advanced",
                number: 5
            }
        },
        {
            skill: "React.js",
            level: {
                label: "intermediate",
                number: 3
            }
        },
        {
            skill: "FastAPI",
            level: {
                label: "beginner",
                number: 1
            }
        },
        {
            skill: "Django",
            level: {
                label: "beginner",
                number: 1
            }
        },
        {
            skill: "Tkinter",
            level: {
                label: "beginner",
                number: 2
            }
        },
        {
            skill: "Pystray",
            level: {
                label: "beginner",
                number: 2
            }
        },
    ],

    devopsAndTooling: [
        {
            skill: "Git",
            level: {
                label: "advanced",
                number: 5
            }
        },
        {
            skill: "Docker",
            level: {
                label: "beginner",
                number: 2
            }
        },
        {
            skill: "Claude Code",
            level: {
                label: "intermediate",
                number: 2
            }
        },
    ],

    languages: [
        {
            skill: "Portuguese",
            translationKey: "portuguese",
            level: {
                label: "fluent",
                cefr: "C2",
                number: 5
            }
        },
        {
            skill: "English",
            translationKey: "english",
            level: {
                label: "advanced",
                cefr: "C1",
                number: 5
            }
        },
        {
            skill: "Italian",
            translationKey: "italian",
            level: {
                label: "intermediate",
                cefr: "B1",
                number: 3
            }
        },
        {
            skill: "Spanish",
            translationKey: "spanish",
            level: {
                label: "basic",
                cefr: "A2",
                number: 2
            }
        },
    ]

}
