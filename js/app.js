'use strict';

//collecting the users name
var userName = prompt('Hi! welcome to my page! This is a guessing game about me. What is your name?');
console.log ('User name is ' + userName);

//loop to get name from user
while (userName === '') {
  userName = prompt('Hi! welcome to my page! This is a guessing game about me. What is your name?');
  console.log ('User name is ' + userName); 
}
  
//array created to store questions from program. q -question, y - users says 'yes' on question, 'n' -user answers 'no' on question
var gameResponds = [
  {q: 'Nice to meet you ' + userName + ' ! Do you want to play my game?',
   y: 'Great!',
   n: 'see you next time!'
  },
  {q: 'Is my full name Anastasia?',
   y: 'Yes, you are right!',
   n: 'Wrong. My name is Anastasia!'
  },
  {q:'Was I born in Ukraine?',
  y: 'Wrong. I am from Russia.',
  n: 'Yes! You are right, I was born in Russia.'

  }
  ''];



//invitation to play a game, with choice to quit
var wantPlay = prompt(gameResponds[0].q);
console.log ('Does user want to play?:' + wantPlay);

while (wantPlay !== 'yes' && wantPlay !=='no' && wantPlay !=='y' && wantPlay !=='n') {
  wantPlay = prompt(gameResponds[0].q);
}
  
if (wantPlay === 'yes' || wantPlay === 'y'){
  alert(gameResponds[0].y);
}
else if (wantPlay === 'no' || wantPlay === 'n') {
  alert(gameResponds[0].n);
  throw(gameResponds[0].n);
}



//question about my name, user must choose 'yes', 'no', 'y', 'n'. If user choses something different while loop repeat the question,
//untill valid answer won't be received.
  
var fullName = prompt(gameResponds[1].q);
  
fullName = fullName.toLowerCase();
console.log ('Does user think my name is Anastasia?: ' + fullName);
  
while (fullName !== 'yes' &&  fullName !=='no' && fullName !=='y' && fullName !=='n') {
  fullName = prompt(gameResponds[1].q);
}
  
if (fullName === 'yes' || fullName === 'y'){
  alert(gameResponds[1].y);
}
  
else if (fullName === 'no' || fullName === 'n') {
  alert(gameResponds[1].n);
}
  
  

  
//question about my myOrigin, user must choose 'yes', 'no', 'y', 'n'. If user choses something different while loop repeat the question,
//untill valid answer won't be received.
  
var myOrigin = prompt(gameResponds[2].q);
  
myOrigin = myOrigin.toLowerCase();
  
console.log ('Does user think i was born in Ukraine?: ' + myOrigin);
  
while (myOrigin !== 'yes' &&  myOrigin !=='no' && myOrigin !== 'y' && myOrigin !== 'n') {
  myOrigin = prompt(gameResponds[2].q);
}
  
if (myOrigin === 'yes' || myOrigin === 'y' ){
  alert(gameResponds[2].y);
}
else if (myOrigin === 'no' || myOrigin === 'n') {
  alert(gameResponds[2].n);
}
  
  
  
//question about like I code or not, user must -//-
  
var likeCode = prompt('Do I like code?');
  
likeCode =
  likeCode.toLowerCase();
console.log ('Does user think that I like code? ' + likeCode);
  
while (likeCode !== 'yes' &&  likeCode !=='no' && likeCode !== 'y' && likeCode !== 'n') {
  likeCode = prompt('Do I like code?');
}
  
if (likeCode === 'yes' || likeCode === 'y'){
  alert('Yes! I love coding!');
}
else if (likeCode === 'no' || likeCode === 'n' ) {
  alert('Wrong. I love coding!');
}
  








/* // I used a lot of repetitive code in this file, in future I am planning to make it into the function.

//welcome to my page question, if user doesn't want to play game he gets to the page AboutMe after he presses 'no' or 'n'
var wantPlay = prompt('Hi! welcome to my page! This is a guessing game about me. Your answer should be yes or no. Do you want to play?');

wantPlay= wantPlay.toLowerCase();
console.log ('Does user want to play?:' + wantPlay);

while (wantPlay !== 'yes' &&  wantPlay !=='no' && wantPlay !=='y' && wantPlay !=='n') {
  wantPlay = prompt('Hi! Welcome to my page! This is a guessing game about me. Your answer should be yes or no. Do you want to play?');
}

if (wantPlay === 'yes' || wantPlay === 'y'){
  alert('great!');
}
else if (wantPlay === 'no' || wantPlay === 'n') {
  alert('see you next time!');
  throw('see you next time!');
}

//question about my name, user must choose 'yes', 'no', 'y', 'n'. If user choses something different while loop repeat the question,
//untill valid answer won't be received.

var fullName = prompt('Is my full name Anastasia?');

fullName = fullName.toLowerCase();
console.log ('Does user think my name is Anastasia?: ' + fullName);

while (fullName !== 'yes' &&  fullName !=='no' && fullName !=='y' && fullName !=='n') {
  fullName = prompt('Is my full name Anastasia?');
}

if (fullName === 'yes' || fullName === 'y'){
  alert('Yes, you are right!');
}

else if (fullName === 'no' || fullName === 'n') {
  alert('Wrong. My name is Anastasia!');
}




//question about my myOrigin, user must choose 'yes', 'no', 'y', 'n'. If user choses something different while loop repeat the question,
//untill valid answer won't be received.

var myOrigin = prompt('Was I born in Ukraine?');

myOrigin = myOrigin.toLowerCase();

console.log ('Does user think i was born in Ukraine?: ' + myOrigin);

while (myOrigin !== 'yes' &&  myOrigin !=='no' && myOrigin !== 'y' && myOrigin !== 'n') {
  myOrigin = prompt('Was I born in Ukraine?');
}

if (myOrigin === 'yes' || myOrigin === 'y' ){
  alert('No. I am from Russia.');
}
else if (myOrigin === 'no' || myOrigin === 'n') {
  alert('Yes! You are right, I was born in Russia.');
}



//question about like I code or not, user must -//-

var likeCode = prompt('Do I like code?');

likeCode =
likeCode.toLowerCase();
console.log ('Does user think that I like code? ' + likeCode);

while (likeCode !== 'yes' &&  likeCode !=='no' && likeCode !== 'y' && likeCode !== 'n') {
  likeCode = prompt('Do I like code?');
}

if (likeCode === 'yes' || likeCode === 'y'){
  alert('Yes! I love coding!');
}
else if (likeCode === 'no' || likeCode === 'n' ) {
  alert('Wrong. I love coding!');
}



//question is asking if user wants to learn code, user must -//-
//myOriginaly my idea was to put hyperlink that goes to the codefellows website into the alert window. So far I couldn't find a way to do so. 
var wantLearnCode = prompt('Would you like to learn how to code too?');

wantLearnCode =
wantLearnCode.toLowerCase();

console.log ('Does user want to learn code?' + wantLearnCode);

while (wantLearnCode !== 'yes' &&  wantLearnCode !=='no' && wantLearnCode !== 'y' && wantLearnCode !== 'n') {
  wantLearnCode = prompt('Would you like to learn how to code too?');
}
if (wantLearnCode === 'yes' || wantLearnCode === 'y'){
  alert('Go to  www.codefellows.com');
}
else if (wantLearnCode === 'no' || wantLearnCode === 'n'){
  alert('See you next time!');
} */
