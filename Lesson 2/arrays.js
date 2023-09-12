//   1)   შექმენით პროგრამა, რომელიც შეამოწმებს, არის თუ არა კონკრეტული ცვლადის მნიშვნელობა მასივი

let arrayofSubjects = ["html", "css", "js"];

alert(Array.isArray(arrayofSubjects));

//2.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის პირველ ელემენტს
alert(arrayofSubjects[0]);

//3.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის ბოლო ელემენტს.
alert(arrayofSubjects[arrayofSubjects.length - 1]);

// 4.      მოცემული გვაქვს შემდეგი მასივები:
//  color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//  o = ["th","st","nd","rd"]
//  შექმენით პროგრამა რომელიც გამოიტანს ფერებს შემდეგი თანმიმდევრობით:
//  "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
let o = ["th", "st", "nd", "rd"];
let choise = "choise is";
let number = [1, 2, 3];

alert(`${number[0]} ${o[1]} ${choise} ${color[0]} 
${number[1]} ${o[2]} ${choise}  ${color[1]}
${number[2]} ${o[0]} ${choise}  ${color[2]}`);


















