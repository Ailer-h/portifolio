const copy = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text)
    } catch (error) {
        console.log("Error in copy: ", error)
    }
}

export default copy