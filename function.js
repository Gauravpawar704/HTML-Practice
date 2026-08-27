console.log("This is new way to add js in our html");

function greet(name, greetText) {
    let name1="Function in javascript";
    console.log(name1);
    console.log(greetText + " " + name);
    console.log(name + " is a developer");
}

function sum(a,b,c) {
    let d=a*b+c-4;
    return d;
}

function greater(a,b) {
    if(a>b){
        console.log(a+" is greater than "+b);
    }else if(a==b){
        console.log(a+" this is eqaul to "+b);
    }else {
        console.log(a+" is smaller than "+b);
    }
}

let greater1=greater(500,2);
console.log(greater1);

let name = "gaurav";
let name2 = "Omkar";
let name3 = "aryan";
let name4 = "raj";
let greetText = "Good Morning";

greet(name, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);

// let returnVal=greet(name4);
// console.log(returnVal);
let returnVal=sum(12,2,2);
console.log(returnVal);
// console.log(name2+" is a developer");
// console.log(name3+" is a developer");
// console.log(name4+" is a developer");