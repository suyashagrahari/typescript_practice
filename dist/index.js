"use strict";
// *************   data types in typescript ***************
// this is implicit decalration 
let Name = "suaysh"; // we can't use js keyword directly in typescript 
// this is explicit declaration 
let a = 3843095;
let b = "sjsklfa";
let c = true;
// second method to define data types
let d = "Suyash";
// console.log(typeof d);
// using or operator -> means use anyone of these datatypes
let e;
e = "suyash";
e = 3;
e = true;
// if we don't define any data types then it will take automatically ***** any ******* datatype
// ************* array in type script ************************
// their are two methods to define an array
// first way :- 
let f = [3, 4, 5, 3, 24, 324];
// console.log(f[3]);
// console.log(typeof f);
// second way :- 
let g = ["vnjs", "ajkjadn"];
// console.log(g);
// we also use many data type in single array  
let h = [23, 24, "cjak", 234, "andkn"];
let i = { name: "suyash", phone: 84203924 };
let j = { name: "suyash", phone: 38024824 };
const add = (a, b = 10) => {
    // console.log(a+b);
    return a + b;
};
add(4);
const obj = {
    name: "suyash",
    no: 2383023824,
};
const obj1 = {
    name: "suyash",
    no: 232042,
    // networth : 34801934, because it is option type so it is not compulsory 
    loss: true,
};
const arr = (a, b, ...m) => {
    // console.log(a)
    // console.log(b);
    // console.log(m);
    // console.log(m.filter((value)=>{
    //     if(value % 5 === 0)
    //     return value;
    // }));
    return m;
};
arr(2, 3, 4, 5, 5, 56, 563, 2, 24, 5, 6);
// *************** function with object  *********************
// first way which is normal approach 
const raman = (product) => {
    // console.log(product);
};
raman({ name: "canof", phone: 92482948 });
const product1 = {
    name: "suyash",
    phone: 38294284
};
const akshat = (product1) => {
    // console.log(product1);
};
akshat(product1);
// third way is using interface method and in that we also use extends method 
// **************** Using class in typescript ************************
class Player {
    constructor(height, weight) {
        this.getHeight = () => console.log(this.height);
        this.height = height;
        this.weight = weight;
    }
}
const Player1 = new Player(10, 30);
const User3 = {
    name: "suyash",
    email: "cndckdfm",
};
const user4 = {
    name: "suaysh Agrahari",
    email: "suyash@gmail.com",
};
// *************** Genric in typescript ***********
// genric m hm ek common data type hota h jiske through m function m kuch bhi data type bhej skte hain 
// const func =   <customType>(n:customType):customType =>{
//     const text:customType = n;
//     console.log(text);
//     return text;
// }
const func = (n) => {
    const text = n;
    console.log(text);
    return text;
};
const ans = func(4);
const ans1 = func("suaysh");
const ans2 = func(true);
const suyash = {
    name: "suaysh",
    age: 2382,
};
const ans3 = func(suyash);
const ans4 = func("suyash"); // this it will take stirng type 
// const ans5 = func<string>(suyash); this will give eror because suyash is person type 
// generic will also use in array 
const arr1 = [];
// we also use multiple geniric in function 
const func1 = (n, m) => {
    return { n, m };
};
const ans10 = func1("suyash", 18232);
// extends property in genric 
const func2 = (n, m) => {
    return { n, m };
};
const user1 = {
    name: "suaysh",
    email: "nsjdf",
};
const user2 = {
    name: "virat",
    email: "sof",
    phone: 8245,
};
const ans12 = func2(user1, user2);
// genric most usefull case 
const user3 = [
    {
        name: "suaysh",
        email: "djaf",
    },
    {
        name: "raman",
        email: "raman@",
    },
    {
        name: "ratnesh",
        email: "ratnesh@",
    },
    {
        name: "Abhay",
        email: "abhay@",
    },
    {
        name: "akshat",
        email: "akshat@",
    }
];
const filterArray = (arr, key, value) => {
    return arr.filter((item) => item[key] === value);
};
const filterPeopleByName = filterArray(user3, "name", "ratnesh");
;
console.log(filterPeopleByName);
