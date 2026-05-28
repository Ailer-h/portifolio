import { useUserPreferences } from "../context/UserPreferencesContext"

export const formatDate = (date: Date | string) => {
    if (!(date instanceof Date)) return null

    const { t } = useUserPreferences()
    const dateLocale = t('certifications.dateLocale')

    const dateStr = date.toLocaleDateString(dateLocale, { month: "long", year: "numeric" })
    return dateStr.charAt(0).toUpperCase() + dateStr.substring(1)
}