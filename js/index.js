//alert('Hello!')
let greetings = 'World!';
//alert(greetings); 

const message = 'Hello ' + greetings;
alert(message);

const userAge = parseFloat(prompt('Enter yuor age'));
alert('Your age is: ' + userAge);

/*const nextAge = userAge+1;
alert(nextAge);*/
const nextAge = add(userAge,1);
alert(nextAge);

if (userAge >=18) {   //> < >= <= === == !== != && ||
    alert('You are adult!');
} else {
    alert('You are anderaged')
}

function add(a, b) {
    const result = a + b;
    return result;
}

/*function add(userAge) {
    const nextAge = userAge + 1;
    return nextAge
}
alert(nextAge);*/