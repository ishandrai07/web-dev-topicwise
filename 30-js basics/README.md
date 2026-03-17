# JavaScript Basics Practice 📌

This project contains basic JavaScript code used to understand the **fundamental concepts of JavaScript** such as variables, data types, and objects.  
The code mainly runs in the **browser console** and demonstrates how JavaScript works step by step.

---

## 📁 Files Included

- **script.js** – Contains JavaScript code demonstrating basic concepts

---

## 📚 Concepts Covered

### 1️⃣ Console Output
JavaScript can print output using `console.log()` which is useful for debugging and understanding program flow.

Example:
```javascript
console.log("javascript");
```

---

### 2️⃣ Variables in JavaScript

Variables are used to store data values. JavaScript mainly uses **var**, **let**, and **const**.

#### var
- Old way of declaring variables
- Function scoped
- Can be redeclared and updated

Example:
```javascript
var a = 5;
var b = 6;
var c = a + b;
c += 9;
console.log(c);
```

---

#### const
- Used for values that should not change
- Cannot be reassigned after declaration

Example:
```javascript
const a1 = 15;
console.log(a1);
```

---

#### let
- Block scoped
- Can be updated but not redeclared in the same scope

Example:
```javascript
{
    let a = 10;
    console.log(a);
}
```

---

### 3️⃣ Primitive Data Types

Primitive data types store **single values**.

Types used in this project:
- String
- Number
- Boolean
- Undefined
- Null

Example:
```javascript
let x = "js";
let y = 7;
let m = 7.7;
let n = true;
let p = undefined;
let q = null;
```

You can check the type using:

```javascript
console.log(typeof x);
```

---

### 4️⃣ JavaScript Objects

An **object** is a collection of related data stored as **key–value pairs**.

Example:
```javascript
let i = {
    "name": "ishand rai",
    "id": 2301010044,
    "salary": 50000
};
```

Properties of an object can also be **updated or added**.

```javascript
i.salary = 100000;
i.adaar = 8758379;
```

---

## 🛠️ Technologies Used
- JavaScript (ES6)

---

## 🎯 Learning Outcomes
- Understanding JavaScript variables
- Learning primitive data types
- Using `console.log()` for output
- Working with JavaScript objects
- Updating and adding object properties

---

## 👨‍💻 Author
**Ishand Rai**  
Frontend Web Development Learner
