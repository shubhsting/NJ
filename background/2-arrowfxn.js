// const square = function (x) {
//     return x * x;
// }

// short arrow fxn
const sq = (x) => {
    return x * x;
}
// shorthand arrow fxn
// const square = (x) => x * x
// console.log(square(9))

// ye normal event hai ander print guestlist mein nem undefined aayega kyoki vo access nhi kr payega bahar ki
// const event = {
//     name: 'Birthday Party',
//     guestList: ['Andrew', 'Shubham', 'Mike'],
//     printGuestList: function () {
//         this.guestList.forEach(function (guest) {
//             console.log(guest + "  Attended  " + this.name)
//         })

//     }
// }
//updated by arrow fxn
// yaha pr this se hi birthday party print ho jayega
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Shubham', 'Mike'],
    printGuestList() {
        this.guestList.forEach((guest) => {
            console.log(guest + "  Attended  " + this.name)
        })

    }
}
event.printGuestList()