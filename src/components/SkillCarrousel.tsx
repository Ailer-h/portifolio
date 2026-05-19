import { useRef, useState, useEffect } from "react"
import { type Skill } from "../content/skills"
import { useUserPreferences } from "../context/UserPreferencesContext"
import "../stylesheets/SkillCarrousel.css"

interface SkillCarrouselProps {
    elements: Skill[]
}

const SkillCarrousel = ({ elements }: SkillCarrouselProps) => {

    const { t } = useUserPreferences()
    const scrollRef = useRef<HTMLDivElement>(null)
    const [atStart, setAtStart] = useState(true)
    const [atEnd, setAtEnd] = useState(false)
    const [canScroll, setCanScroll] = useState(false)

    const updateEdges = () => {
        const el = scrollRef.current
        if (!el) return
        setCanScroll(el.scrollWidth > el.clientWidth)
        setAtStart(el.scrollLeft <= 0)
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
    }

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return
        updateEdges()
        el.addEventListener("scroll", updateEdges)
        const observer = new ResizeObserver(updateEdges)
        observer.observe(el)
        return () => {
            el.removeEventListener("scroll", updateEdges)
            observer.disconnect()
        }
    }, [])

    const scroll = (direction: "left" | "right") => {
        const el = scrollRef.current
        if (!el) return
        const firstCard = el.firstElementChild as HTMLElement | null
        const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 216
        const count = Math.max(1, Math.floor(el.clientWidth / cardWidth))
        const amount = count * cardWidth
        el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
    }

    return <div className="carrousel-wrapper">

        {canScroll && <button className="carrousel-arrow left" onClick={() => scroll("left")} disabled={atStart} aria-label="Scroll left">&#8249;</button>}

        <div className="carrousel" ref={scrollRef} style={{
            "--fade-left": canScroll && !atStart ? "transparent" : "black",
            "--fade-right": canScroll && !atEnd ? "transparent" : "black",
        } as React.CSSProperties}>
            {
                elements.map((element) => {
                    const skillName = element.translationKey
                        ? t(`skills.languageNames.${element.translationKey}`)
                        : element.skill

                    return <>
                        <div className="skill">
                            <h3>{skillName}</h3>
                            <hr />
                            <p>
                                <b>{t('skills.level')}:</b> {t(`skills.levels.${element.level.label}`)}
                                {element.level.cefr && <span>{element.level.cefr}</span>}
                            </p>
                            <div className="barholder">
                                <div className="bar" style={{"width": (element.level.number / 5) * 100 + "%"}}></div>
                            </div>
                        </div>
                    </>
                })
            }
        </div>

        {canScroll && <button className="carrousel-arrow right" onClick={() => scroll("right")} disabled={atEnd} aria-label="Scroll right">&#8250;</button>}

    </div>

}

export default SkillCarrousel