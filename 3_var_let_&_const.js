// NOTE :- Jaysaki "let" redclear nahi hosakta hai , "var" ko redeclear kiya ja sakta hai isiliye humlog apne program me "let" ka hi use karenge taki hamare proram mr kam se kam bugs rahe .

// (1)."let" ka scope block level hota hai.let ko redeclear nahi kiya ja sakta hai .
// (2)."const" ka scope block level hota hai . ye bhi redeclear nahi kiya jasakta hai.
// (3)."var" ka scope block level nahi hot hai.Ye redeclear kiya jasakta hai .

let a = 45;
// let a = "mantu"; //This will throw error .
a = 786; // This is allowed in jsvascript (yaniki "let" ka redeclaration allowed nahi hai lekin "let" ka re-assigment alowed hai.)
var b = "Araham";
// var b = "kya hal hai bhai"; //This will not throw any error .
var c = null;
var d = undefined;
const e = "kya haal hai bhai ?";

{
  var b = "Abeddin";
  console.log(b);
}
console.log(b);

{
  let a = 109;
  console.log(a); //This will print 109 .
}
console.log(a); //This will print 786 .

{
  const e = 568;
  console.log(e);
}
  console.log(e);
