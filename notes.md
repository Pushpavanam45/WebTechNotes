# JavaScript

## What is JavaScript ?

* javaScript is one programming language used to add funnctionalities to the application created by html and css.

* we can use this language both in client and server side .

## How many ways we can write javascript code?

* we can write js code in two ways.

*1. internal javascript*
*2. external javascript*

### Internal JavaScript

* it is the process of writing the js code inside same html file.
* for that we need  `<script> </script>` tag .
* this tag should be added inside the `body tag` at the end .

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>introduction</title>
</head>
<body>
    <h1>javascript introduction</h1>
    

    <script>
        console.log("Hello, World!");

// ! variable 

// let , var , const

// var keyword 


// variable declaration
var ename ; 

// variable initialization
ename = "sachin"; 
console.log(ename);

// variable declaration and initialization
let eid = 101; 
console.log(eid);

// variable re-initialization
ename = "sachin tendulkar"; 
console.log(ename);

// variable re-declaration
var ename = "blake" 
console.log(ename);


console.log("---------------------------------------------------");

// ! let keyword

// variable declaration
let salary ; 

// variable initialization 
salary = 50000;  
console.log(salary);

//variable declaration and initialization
let dept = "IT";
console.log(dept);

//re-initialization
dept = "manager";
console.log(dept);


// re-declaration is not possible 
// let salary;

console.log("---------------------------------------------------");

// ! const keyword

const  adhaarno = 38746836462;

adhaarno = 1234567890; // re-initialization is not possible

console.log(adhaarno);

// const myName   

// myName = "abc";
    </script>

    
</body>
</html>
```

### External JavaScript

* this is process of creating one separate javascript file buy usinfg  `.js` extension and then link the javaScript and html file by using `<script src ="intro.js"></script> tag`.

* in `src` attribute we have to provide the path of the javascript file.


## Printing Statement 

* in javascript for printing the output we can use `console.log()`

``` js
console.log("Gautham");
```

## how to declare variable

* `variable` is container where we can store the data.
* in javascript we can declare variable by using `let`, `var` and `const` keyword.

### var keyword

* here we can `declare` the variable and next line we can `initialize` that .

``` js

  var a;
  a = 10;
```
* we can do both `declaration` and ` intialization` in same line.

```js
  var b=20;
```

* we can `modify`/ `re-initialized` the variable value.

```js
  b=200;
  a=300;
```
**we can redeclare the variable by using keyword**

```js
var ename = "miller";
var ename = "scott";
```

### let keyword

* `let` keyword is also used to declare the variable same like `var` keyword but here we can't `re-declare` any variable.
```js
let eid = 101;
let eid ; // not possible 
```

### const keyword
*it is used to make a any variable constant.
*here we cannot change the value of the variable.

* **note -> declaration and initialization we have to do at a time.** 

```js
const pi = 3.14;

pi = 4.5; // not possible 

const x ; // not possible
``` 