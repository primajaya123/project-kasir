export const formData = (object) => {
    const form = new FormData()
    for (let [key, value] of Object.entries(object)) {
        form.append(key, value)
    }
    return form
}