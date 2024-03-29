// *************   data types in typescript ***************

// this is implicit decalration 
let Name = "suaysh" // we can't use js keyword directly in typescript 


// this is explicit declaration 
let a: number = 3843095;
let b : string = "sjsklfa"  
let c : boolean = true;

// second method to define data types
let d = <string>"Suyash";
// console.log(typeof d);
// using or operator -> means use anyone of these datatypes
let e : string | number | boolean;
e = "suyash";
e = 3;
e = true;

// if we don't define any data types then it will take automatically ***** any ******* datatype


// ************* array in type script ************************

// their are two methods to define an array

// first way :- 
let f:number[] | string[] = [3,4,5,3,24,324];
// console.log(f[3]);

// console.log(typeof f);
// second way :- 
let g: Array<string> = ["vnjs","ajkjadn"];
// console.log(g);

// we also use many data type in single array  

let h : Array<string | number> = [23,24,"cjak",234,"andkn"];
// console.log(h);

// ***************** Use of Type Aliasis in typescript **************

type Suyash =  {
    name : string,
    phone : number
}

let i: Suyash = {name : "suyash", phone : 84203924};
// console.log(i);

// ***************** Use of Interface in typescript *******************

interface Sus {
    name : string,
    phone : number,
}

let j : Sus = {name : "suyash", phone  : 38024824};
// console.log(j);

// ***************** Using function in typescript  *********************

// const add = (a:number ,b:number):number =>{
//     console.log(a+b);
//     return a+b;
// }

// simple way to write above code is ;- 
// this way is mostly used in code 
type addDataType = (a:number,b?:number)=> number;
const add : addDataType = (a,b = 10)=>{
    // console.log(a+b);
    return a+b
}
add(4);

//  ************* Using object in typescript *************************

interface Obj {
    name : string;
    no : number;
    networth? : number; // for creating option, it is not compulsory 
}

const obj:Obj = {
    name : "suyash",
    no : 2383023824,
}

// console.log(obj);
// console.log(obj.name);

//using inheritance property in onjects 

interface NewObj extends Obj {
    loss : boolean;
    add? : () => void;
}

const obj1 : NewObj = {
    name:"suyash",
    no : 232042,
    // networth : 34801934, because it is option type so it is not compulsory 
    loss : true,
}

// console.log(obj1.add);

// *************** Rest operator in typescript ******************



type arrType = (a : number , b:number , ...m : number[])=> number[];

const arr : arrType = (a,b,...m) =>{
    // console.log(a)
    // console.log(b);
    // console.log(m);
    // console.log(m.filter((value)=>{
    //     if(value % 5 === 0)
    //     return value;
    // }));
    return m
}
arr(2,3,4,5,5,56,563,2,24,5,6)


// *************** function with object  *********************

// first way which is normal approach 

const raman = (product : {
    name : string,
    phone : number,
}) => {
    // console.log(product);
   
}

raman({name:"canof",phone : 92482948});

// second way using type method 


type getDataType = (product : {
    name : string,
    phone : number,
})=>void;

 type product = {
    name : string ; 
    readonly phone : number; // we use readonly so that we can't change this value 
 }
const product1 : product = {
    name: "suyash",
    phone : 38294284
}

const akshat : getDataType = (product1)=>{
    // console.log(product1);
}

akshat(product1);

// third way is using interface method and in that we also use extends method 


// **************** Using class in typescript ************************

class Player {
    private height : number ;
    public weight : number ;

    constructor (height : number , weight : number )
    {
        this.height = height ;
        this.weight = weight;
    }

    getHeight = ()=>console.log(this.height);
}

const Player1 = new Player(10,30);
// console.log(Player1.weight);
// Player1.getHeight();

// ************ Type Assertion in typescript  ************************

// thier are three methods to define type assertion 

// 1)- first method is null method 

// const btn = document.getElementById("btn") as HTMLElement;

// second way 

// const  btn =<HTMLElement> document.getElementById("btn")

// third way using not null method 

// const btn = document.getElementById("btn")!;
// btn.onclick
  
// const img =<HTMLImageElement> document.getElementById("myimg")

// const form  =<HTMLFormElement> document.getElementById("myform")
 
// const myinput = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e)=>{
//     e.preventDefault();
//     console.log(myinput.value);
//     const value = myinput.value;
    
//     const h1 = document.createElement("h1");
//     h1.textContent = value + " " + "Suyash";

//     const body = document.querySelector("body")!;
//     body.appendChild(h1);
// }


// ************** types of utility in typescript 

// 1):-- Partial<type> -> we use this for creating optional datatypes

type User = {
    name : string;
    email : string;
}

type User1  = Partial<User>;


// 2):--- Required<type> -> this is opposite of partial utility 

type User2 = Required<User1>

const User3: Required<User1> = {
    name:"suyash",
    email  : "cndckdfm",
}

// 3):- reeadonly<type> -> in this ultility we only read the data not change anything in i.

type User4 = Readonly<User>;

const user4 : User4 ={
    name : "suaysh Agrahari",
    email : "suyash@gmail.com",
}

// user4.name = "jandad" -> here it give error becaus it is read only property

// 4):- Record<key,type> -> we use this as simplify the type 
type User6 = Record<"name"|"email", string>

// 5):- Pick<type,key> -> we use this to extendts the previous property in new one or we only use some property of previous type 

interface OrderInfo {
    readonly id : string ,
    user : string ,
    city : string,
    state : string,
    country : string,
    status :string,
}

type User7 = Pick<OrderInfo,"city"|"state"|"country">;

// 6):- Omit<type,key> -> ye pick ke ekdm opposite h isme jo bhi key lengye wo chhot jaynegye uske alawa sb ajyengye 

type User8  = Omit<OrderInfo,"user">;

// 7):- Exclude <type,union> :- isme bassicaly jo hme exclude krna h wo key likhte h 

type MyUnion = string | number | boolean | null | undefined;

type exclude = Exclude<MyUnion,boolean>;

// 8):- Extract<Type,Union> : - this will return intersection value :- 

type extract  = Extract<MyUnion,boolean>;

// 9):- NonNullable<Type> :- ye basically null and undefined ko remove kr deta h

type nonNullable = NonNullable<MyUnion>

// *************** Genric in typescript ***********

// genric m hm ek common data type hota h jiske through m function m kuch bhi data type bhej skte hain 

// const func =   <customType>(n:customType):customType =>{
//     const text:customType = n;
//     console.log(text);
//     return text;
// }

const func =   <T>(n:T):T =>{
    const text:T = n;
    console.log(text);
    return text;
}

const ans = func(4);
const ans1 = func("suaysh");
const ans2 = func(true);

type Person = {
    name: string;
    age : number;
}

const suyash : Person = {
    name : "suaysh",
    age : 2382,
}

const ans3 = func(suyash);
const ans4 = func<string>("suyash"); // this it will take stirng type 

// const ans5 = func<string>(suyash); this will give eror because suyash is person type 

// generic will also use in array 

const arr1 : Array<number> = [] 

// we also use multiple geniric in function 

const func1 =<T,O> (n:T,m:O):{n:T,m:O}=> {
    return {n,m};
}

const ans10 = func1("suyash",18232);

// extends property in genric 

const func2 = <T,O extends T>(n:T,m:O):{n:T,m:O} =>{
    return {n,m}
}

// const ans11 = func2<string,number>("suyash",392498); it gives error because we only take string value because O is now extends the propert of T which is string datatype ;

type Person1 = {
    name : string,
    email: string,
}

type Person2 = {
    name : string,
    email: string,
    phone : number,    
}

const user1:Person1 = {
    name: "suaysh",
    email : "nsjdf",
}
const user2: Person2 = {
    name: "virat",
    email:"sof",
    phone : 8245,

}

const ans12 = func2<Person1,Person2>(user1,user2);


// genric most usefull case 

const user3:Person1[] = [
    {
        name:"suaysh",
        email:"djaf",
    },
    {
        name:"raman",
        email:"raman@",
    },
    {
        name:"ratnesh",
        email:"ratnesh@",
    },
    {
        name:"Abhay",
        email:"abhay@",
    },
    {
        name:"akshat",
        email:"akshat@",
    }
]



const filterArray = <T, U extends keyof T>(arr : T[], key:U, value : T[U]) : T[]=>{
    return  arr.filter((item)=>item[key] === value)
};

const filterPeopleByName = filterArray(user3,"name","ratnesh");;

console.log(filterPeopleByName);