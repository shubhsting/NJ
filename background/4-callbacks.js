
//function ke ander function ko hi callback function khte hai
setInterval(() => {
    console.log(hello);
}, 2000); //time is in ms
//it is not always not asynchronous.For example
const names = ["shubham", "Mayank", "Shivanshu"];
const reqd = names.filter((name) => {
    return name.length <= 4
})
