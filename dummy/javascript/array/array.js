let price = [100, 200, 300, 400, 95]

price.map((ele, index, array) => {
    console.log(ele, index, array)
})

let updatedPrice = price.map((ele) => {
    return ele * (95 / 100);
})

console.log(updatedPrice);
console.log(price);

let users = ["john", "david", "smith", "blake"]

let updatedUsers = users.map((ele) => {
    return ele.toUpperCase();
})

console.log(users);
console.log(updatedUsers)
let product = ["Laptop", "mobile", "headPhones", "watch"]
let updatedPoduct = product.map((products) => {
    return products.concat(" wifi");
})


console.log(updatedPoduct);
console.log(product);


let filterePrice = price.filter((prices) => {
    return prices != 100
})

console.log(filterePrice);

let rating = [4.5, 4.1, 2.6, 3.9, 4.6]
let updatedRating = rating.forEach((rate) => {

    console.log(rate - 1)
    return rate - 1; // this will not return 
})
console.log(updatedRating) //undefined

console.log(rating)
let unsorted = [5, 3, 2, 1, 4]

unsorted.sort((a, b) => {
    return a - b;

})

console.log(unsorted)

let unsorted2 = [5, 2, 3, 1, 4]


unsorted2.sort((a, b) => {
    return b - a;

})

console.log(unsorted2)

//reduce method 

let age = [5, 10, 15, 20, 25];

let sum = age.reduce((acc, ele) => {
    return acc + ele;
}, 0);

console.log(age)
console.log(sum)


let mul = age.reduce((acc, ele) => {
    return acc * ele;
}, 1)

console.log(mul)