                            // Note:-
// javascript me 7 primitive data type hoten hai.
// (1).N--> Null
// (2).N--> Number
// (3).S--> Symbol
// (4).S--> String
// (5).B--> Boolean
// (6).B--> Bigint
// (7).U--> undefined

// javascript me 1 hi non-primitive data type hoten hai.
// (1).O--> Object

let a = null ;
let b = 786 ;
let c = Symbol(" I'm a nice symbol. ");
let d = " I'm a good persion. ";
let e = true ; //false 
let f = BigInt("789");
let g = undefined ;

let item = {
    "Ara": true,
    "Shubh":false,
    "lovish":67,
    "Rohan":undefined,
    "Rana":"urmila"
};

const person = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };

console.log(a , b , c , d , e , f , g);

console.log(typeof a , typeof b , typeof c , typeof d , typeof e , typeof f , typeof g);

console.log(item);

console.log(person);

console.log(item['Ara'])
console.log(item.lovish);

console.log(person.firstName);
console.log(person['id']);