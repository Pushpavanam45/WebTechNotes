let student = {
    sname: "gautham",
    sage: 22,
    isPlayer: true

}
console.log(student)


let emp = {
        ename: "gautham",
        eage: 22,
        eid: 1,
        isMarried: false,
        skills: [
            "frontend",
            "backend",
            "database "
        ]

    },
    play = () => {
        console.log("like to play cricket")
    },
    address = {
        city: "chennai",
        pin: 600057,

    }


console.log(emp)
let pen = {
    price: 30,
    color: "blue",
    brand: "renalds"
}
console.log(pen)


// object keys
let keys = Object.keys(pen)

console.log(keys)

// Object values 
let values = Object.values(pen)
console.log(values);

let key_value = Object.entries(pen)

console.log(key_value)

//object freeze

let ob1 = {
    name: "watch",
    price: 1000
}
console.log("\t\t\t Before freeze")

console.log(ob1);
Object.freeze(ob1);
ob1.color = "black" // we can't add

ob1.price = 2000 // we can't modify

delete ob1.price //we can't delete
console.log("\t\t\t after freeze")

console.log(ob1)

// object.isfrozen


console.log(Object.isFrozen(ob1))
console.log(Object.isFrozen(pen))

//Object.seal

let ob2 = {
    name: "gautham",
    price: 2200
}
console.log("\t\t\t before seal")

console.log(ob2)

Object.seal(ob2)

ob2.color = "black" // we can't add

delete ob2.price; // we can't delete
ob2.price = 30000; // we can modify
console.log("\t\t\t after seal")
console.log(ob2)

// Object.isSealed
console.log(Object.isSealed(ob1)) //true

console.log(Object.isSealed(ob2)) //true

console.log(Object.isFrozen(ob2)) //false

//Object.assign()

let ob3 = {
    price: 60
}

let ob4 = {
    color: 'red',
    brand: "camlin"
}


let combine = Object.assign({}, ob4, ob3)

console.log(combine)
console.log(ob3)
console.log(ob4)

//object with same key

let watch = {
    name: "rolex",
    price: 12333
}

let re = {
    name: "Calssic350",
    price: 43322
}

let combined = Object.assign({}, watch, re)

console.log(combined)
console.log(re)
console.log(watch)

//hasOwnProperty()

console.log(watch.hasOwnProperty("price"))
console.log(re.hasOwnProperty("pri"))

//how to create an object using class

class Student {

    sname;
    sid;

    constructor(sname, sid) {
        this.sname = sname;
        this.sid = sid

    }

    studetails() {
        console.log(`student name is $(this.sname)`)
        console.log(`student id is $(this.sid)`)
    }
}

let stu2 = new Student("chandru", 2)
let stu1 = new Student("Gautham", 1);
console.log(stu1)





console.log(stu2)

let students = [{
        sid: 1,
        sname: "gautham",
        age: 22

    },
    {
        sid: 3,
        sname: "chandru",
        age: 20
    }
]

students.map((ele) => {
    console.log(`sname is ${ele.sname}`)
    console.log(`sid is ${ele.sid}`)
    console.log(`age is ${ele.age}`)


})