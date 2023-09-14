// function functionSquare() {
//     let a = parseInt(prompt("შეიყვანეთ მნიშვნელობა"));

//     if (!isNaN(a)) {
//       return alert(`შეყვანილი რიცხვის კვადრატია ${functionSquare}`);
//     } else if (a === 0) {
//       return alert("ნულის კვადრატი არის ნული");
//     } else {
//       return alert("მნიშვნელობა უნდა იყოს ციფრი");
//     }
//   }



function functionSquare() {
    let a = parseInt(prompt("შეიყვანეთ რიცხვის მნიშვნელობა"));
    return a * a;
}

let result = functionSquare(); 

alert(result); 



// function farenheitConverter(){
//     let f=parseInt(prompt("შეიყვანეთ C"))
//     return (c*9/5)+32
// }

// let celcius =farenheitConverter();
// alert(celcius)



function fahrenheitConverter() {
    let c = parseInt(prompt("შეიყვანეთ C"));
    return (c * 9 / 5) + 32;
}

let celsius = fahrenheitConverter();
alert(celsius);
// --------------


// 3-----------


function reverseString(str) {
    return str.split('').reverse().join('')

}

let shebtunebuliTexti = reverseString

 

alert(reverseString("Geeks for Geeks"));


// 4-------------

let vegetables = 'Carrot'
switch (vegetables) {
    case "Carrot":
        alert("hello");
        break;
    case "Broccoli":
        alert("welcome");
        break;
    default:
        alert("Neither")
}


// -6-----------
let action = "move";
switch (action) {
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping");
        break;
    case "run":
        alert("you're running");
        break;
    default:
        alert("invalid action.");

}
