const fs = require('fs')
const chalk = require('chalk')
// const removeNotes = function (title) {
//     const notes = loadNotes()
//     const notestoKeep = notes.filter(function (note) {
//         return note.title !== title
//     })
//     if (notes.length > notestoKeep.length) {
//         console.log(chalk.green.inverse('Note Existed and have been removed'))
//         saveNotes(notestoKeep)
//     }
//     else console.log(chalk.red.inverse('Note did not Existed'))

// }
// const createNotes = function (title, body) {
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter(function (note) {
//         return note.title === title
//     })
//     if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log("note added successfully")
//     }
//     else
//         console.log("oops already present")

// }
// const saveNotes = function (notes) {
//     const stNotes = JSON.stringify(notes)
//     fs.writeFileSync('data.json', stNotes)
// }
// const loadNotes = function () {
//     try {
//         const dataBuffer = fs.readFileSync('data.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     }
//     catch (e) {
//         return []
//     }
// }


// new modified code with arrow functions



const removeNotes = (title) => {
    const notes = loadNotes()
    const notestoKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notestoKeep.length) {
        console.log(chalk.green.inverse('Note Existed and have been removed'))
        saveNotes(notestoKeep)
    }
    else console.log(chalk.red.inverse('Note did not Existed'))

}
const createNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("note added successfully")
    }
    else
        console.log("oops already present")

}
const saveNotes = (notes) => {
    const stNotes = JSON.stringify(notes)
    fs.writeFileSync('data.json', stNotes)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('data.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}
module.exports = {
    getNotes: loadNotes,
    addNotes: createNotes,
    removeNotes: removeNotes
}
