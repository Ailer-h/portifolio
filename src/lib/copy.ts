import { toast } from 'sonner'

const copy = async (text: string, toastMessage: string) => {
    try {
        await navigator.clipboard.writeText(text)
        toast(toastMessage)
    } catch (error) {
        console.log("Error in copy: ", error)
    }
}

export default copy