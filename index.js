const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

ui.question('Hi there! What is your first name?\n\n', input => {
    const message = sayHello(input)
    console.log(message)
    ui.close();
})
ui.question('Hi there! What is your surname?\n\n', input => {
    const message = sayHello(input)
    console.log(message)
    ui.close();
})
function sayHello(name, surname){
    return `\tHello, ${name} ${surname}!\n`
}
