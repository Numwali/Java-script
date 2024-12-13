// function creation

function logMessage() {
 console.log('Hello world!');
}

const logMessage = function() {
 console.log('Hello world!');
}

function logMessageOne() {
 console.log('How are you?');
}

const logMessageTwo = function() {
 console.log('Great, thanks!');
}

logMessageOne();

logMessageTwo();

function func() {
 return 'hello world';
};
const result = func();
console.log(result);