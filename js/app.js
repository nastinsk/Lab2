'use strict';

var wantPlay = prompt('Hi! welcome to my page! This is a guessing game about me. Your answer should be yes or no. Do you want to play?');

wantPlay= 
wantPlay.toLowerCase(); 



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


var origin = Prompt('Was I born in Ukraine?');

origin = 
origin.toLowerCase(); 


var likeCoding = prompt('Do i like coding?');

likeCoding = 
likeCoding.toLowerCase(); 

var learnCode = prompt('Would you like to learn how to code too?');

learnCode = 
lernCode.toLowerCase();
