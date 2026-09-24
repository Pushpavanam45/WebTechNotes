## date : 18/09/2026

# JAVASCRIPT
## how tpo declare variable 
### const keyword


## DATA TYPE

* it is used to know the type of the data is assigned in any variable .
* there are two types of data type in javascript.
**1. Primitive Datatype**
**2. Non-Primitve Datatype**

### what is typeof 
* `typeof` operator is used to know the dtatype of any variable.

*syntax*
   typeof variablename

### PRIMITIVE DATATYPE

#### 1.number Datatyp
* in javascript both decimal and non decimal numbers belong to number datatype.

```js

let age = 10; //number
console.log(age);

let height = 5.9; //number
console.log(height);

console.log(typeof age);
console.log(typeof height);
```


#### 2.String datatype

* string is a single or collection of character enclosed with double quotes("")/ single quotes('')/backtick(``).

```js
let ename = "John";
let gender = "male";
let about = " he is a player";

console.log(ename, typeof ename);
console.log(gender, typeof gender);
console.log(about, typeof about);
```

#### 3.boolean datatype

* this datatype can accept either `true` or `false` .

```js


//boolean type
let isStudent = true;
console.log(letisStudent, typeof letisStudent);

let isStudy = false;
console.log(isStudy, typeof isStudy);
```

#### 4.undefined 
* any variable is declared but not initialized is called as undefined 
* the `typeof` and undefined variable is **undefined**.

```js
//undefine

let eid;
console.log(eid, typeof eid);
```

#### 5.null
* any variable that is initialized with null 
* the `typeof` nul is `object`.

```js


//null
let sal = null;

console.log(sal, typeof sal);// 'null' object
```

#### 6.bigint
* when we want to store one large integer number / high range ineteger number we can use bigint.
* we have to use 'n' as a suffix to make any number as bigint.

```js

// bigint
let largenumber = 12345678178218828718n;
console.log(largenumber, typeof largenumber);
```


### Non - primitive datatype

**1.function**
**2.array**
**3.object**


## difference btw `==`and `===`
* `==` operator is used to check only the value it will not check the datatype but `===` will check the calue and datatype .
```js
let a =10;
let b="10";
console.log(a==b);//true
console.log(a===b);//false
```