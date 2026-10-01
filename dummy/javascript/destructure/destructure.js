let emp = {
    ename: "miller",
    eid: 101,
    skills: ["frontend", "backend", "database"]
}

console.log(emp.ename)
console.log(emp.eid)
console.log(emp.skills)

//object destructure
let { skills, ename, eid } = emp
console.log(ename)
console.log(skills)
console.log(eid)

// arraydestructure

let subject = ["sql", "java", "python", "html", "css", "js", "react"]

let [sub1, sub2, sub3, ...sub9] = subject

console.log(sub1) //sql

console.log(sub2) //java
console.log(sub3) //python
console.log(sub9) // ['html', 'css', 'js', 'react']



//spread operator(...)

let arr = [10, 20, 30, 40, 50]
console.log(arr)
console.log(...arr)

let frontend = ["html", "css", "js"]

let backend = ["java", "sql", "node.js "]

let fullstack = [...frontend, ...backend]
console.log(fullstack)

let user = {
    username: "allen",
    userage: 20
}

let address = {
    city: "chennai",
    pin: 600057
}

let employee = {...user,
    ...address
}

console.log(employee)

// let copy = name; // shallow copy
let copy = {...names };
copy.push("king")
names.shift()
console.log(" copy array", copy)
console.log("names array ", names)