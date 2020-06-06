// object property shorthand
const name = 'Shubham'
const age = '21'

//method 1 (normal method)
// const user = {
//     name: name,
//     userAge: age,
//     gender: 'M'
// }
// console.log(user)


//method 2(if names are same directly pass in object)
// const user = {
//     name,
//     userAge: age,
//     gender: 'M'
// }
// console.log(user)


// object destructing


const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

// console.log(product.label)
// const { label, price, stock, random } = product
// console.log(label, price, stock, random)

// if(we want to change the name of properties while destructing)
// label has new name of mylabel and random has default value 5 which cannot override original value if present
const { label: mylabel, price, stock, random = 5 } = product
console.log(mylabel, price, stock, random)