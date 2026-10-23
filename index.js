const message = ("hello");
if (message === "pikachu") {
    console.log('Pika Pika!')
}
else if (message === "bye") {
    console.log('Goodbye, Trainer!')
}
else if (message === "hello") {
    console.log('Hey There!')
}
else {
    console.log('I dont understand what you are saying')
}
function reply(msg) {
    if (msg === "hello") {
        return 'hey there';
    }
    else if (msg === "pikachu") {
        return 'pika pika';
    }
    else if (msg.includes('bye')) {
        return 'Goodbye, trainer';
    }
    else {
        return 'I dont understand what you are saying';
    }
}
const response = reply('bye bye');
console.log(response);