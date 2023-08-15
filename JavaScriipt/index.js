console.log("Hello version 4");

//Object Creation

let rectangle={
    length:1,
    breadth:2,

    draw: function(){
        console.log('drawing rectangle');
    }
};

//Factory function
function createRectangle(){
    let rectangle={
        length:1,
        breadth:2,
    
        draw: function(){
            console.log('drawing rectangle');
        }
    };
    return rectangle; 
}

let obj1 = createRectangle();

obj1.draw(); 



let course =[
    {id:1, name:"Ai"},
    {id:2, name:"ML"},
];

let cour = course.find(course=> course.name==="ML");
console.log(cour);

let numbers = [1,2,3,4,5,6,7];

numbers.pop();
numbers.shift();
numbers.splice(2,1);
console.log(numbers);


let first=[1,2,3];
let second=[4,5,6];
let combined = first.concat(second);
console.log(combined);


let sliced = combined.slice(2,4);
console.log(sliced);

let f=[1,2,3];
let s=[4,5,6];

let c = [...f, ...s]; // Spread operator

console.log(c);

let n1=[-1,2,3,-4,-6];

let filtered = n1.filter(value=> value>=0);

console.log(filtered);

run();
//function declaration
function run(){
    console.log("runnning function");
}

//named function assignment
let wlk = function walk(){
    console.log('walking');
}

wlk();

//Annonymous function assignment
let stand2 = function(){
    console.log('walking in stand2 function   ');
}
stand2();



function sum(a,b){
    console.log(arguments);
    return a+b;
}

let ans = sum(1,2,3,4,5,6);


function sum1(a,b){
    let total = 0;
    for(let value of arguments){
        total=total+value;
    }
    return total;
}
let an1 = sum1(1,2,3,4,5,6);
console.log(an1);

// Rest operator
function sum2(...args){
    console.log(args);
}

sum2(1,2,3,4,5,6);

let person = {
    fname:'Love',
    lname:'Babbar'
};

function fullName(){
    return `${person.fname} ${person.lname}`;
}

console.log(fullName()); 