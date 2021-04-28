var flowControl = "me"

switch (flowControl) {
    case "Mary":
        console.log("That's me ");
        //break;
    case "age":
        console.log("She is 21 years");
        //break;
    case "from":
        console.log("She is from Kenya");
    default:
        console.log("she is a hard working")
} //using continue
let number = '';
for (i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    number = number + i;
}
console.log(number);
var b = 34;
do {
    b += 1;
    console.log(b);
} while (b < 45)

var student = "names";
switch (student) {
    case "name":
        console.log('Is a student');
    case "age":
        console.log('she is 21')
    case 'value':
        console.log('loving')
    default:
        console.log('submits work everyday')
}
for (k = 1; k <= 10; k++) {
    if (k % 2 !== 0 && k % 3 === 0) {
        console.log(k)
    }
    console.log(k)
}