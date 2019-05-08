'use strict';

var wantPlay = prompt('Hi! welcome to my page! This is a guessing game about me. Your answer should be yes or no. Do you want to play?');

wantPlay= wantPlay.toLowerCase(); 
console.log


while (wantPlay !== 'yes' &&  wantPlay !=='no') {
    wantPlay = prompt('Hi! Welcome to my page! This is a guessing game about me. Your answer should be yes or no. Do you want to play?');
}

if (wantPlay === 'yes'){
    alert('great!');
}
else {
    alert('see you next time!');
    throw('see you next time!');
    
}

var fullName = prompt('Is my full name Anastasia?');

fullName= 
fullName.toLowerCase(); 

while (fullName !== 'yes' &&  fullName !=='no') {
    fullName = prompt('Is my full name Anastasia?');
}

if (fullName === 'yes'){
  alert('Yes, you are right!');
}

else {
  alert('Wrong. My name is Anastasia!');
}



var origin = prompt('Was I born in Ukraine?');

origin = origin.toLowerCase(); 

if (origin === 'yes'){
    alert('No. I am from Russia.');
}
else {
    alert('Yes! You are right, i was born in Russia.');
}
    

var likeCode = prompt('Do I like code?');

likeCode = 
likeCode.toLowerCase(); 

if (likeCode === 'yes'){
    alert('Yes! I love coding!');
}
else {
    alert('Wrong. I love coding!');
}
    
    

var wantLearnCode = prompt('Would you like to learn how to code too?');

wantLearnCode = 
wantLearnCode.toLowerCase();

if (wantLearnCode === 'yes'){
    alert('Go to  www.codefellows.com');
}
else {
    alert('See you next time!');
}
