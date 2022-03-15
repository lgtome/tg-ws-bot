const generateId = () => {
    let id = 0
    return {
        generateNextId: () => {
            id += 1
            return id
        },
        decreaseId: () => {
            id -= 1
            return id
        },
    }
}

module.exports = { generateId }
