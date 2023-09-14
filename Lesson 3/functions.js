// 1)

function functionSquare() {
    let a = parseInt(prompt("შეიყვანეთ რიცხვის მნიშვნელობა"));
    return a * a;
}

let result = functionSquare(); 

alert(result); 






// 2)
function fahrenheitConverter() {
    let c = parseInt(prompt("შეიყვანეთ C"));
    return (c * 9 / 5) + 32;
}

let celsius = fahrenheitConverter();
alert(celsius);
// --------------


// 3)


function reverseString(str) {
    return str.split('').reverse().join('')

}

let shebtunebuliTexti = reverseString

 

alert(reverseString("Geeks for Geeks"));


// 4)

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


// 5)
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
