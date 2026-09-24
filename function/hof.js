let abc = (x)=>{
    console.log("i am abc function");
    x();
}

abc(()=>{
    console.log("hi this is anonymous function");
})

//calculate

let add = (a,b)=>{
    console.log(`the addidtion is ${a} and ${b} is is ${a+b}`);
}

let div= (a,b)=>{
    console.log(`the division is ${a} and ${b} is is ${a/b}`);
}

let sub= (a,b)=>{
    console.log(`the subtraction is ${a} and ${b} is is ${a-b}`);
}

let mul= (a,b)=>{
    console.log(`the multiplication is ${a} and ${b} is is ${a*b}`);
}
    
let calculation = (fun)=>{
    fun(10,5);
}

calculation(add);
calculation(div);
calculation(mul);
calculation(sub);

{
    var x = 10;
    let y =20
    const z = 30

    console.log('inside block')

console.log(x)
console.log(y)
console.log(z)

}

console.log("outside block")
console.log(x)
//console.log(y)
console.log(z)
