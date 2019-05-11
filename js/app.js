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

  {q: 'Nice to meet you ' + userName + ' ! Do you want to play my game?',  //object for question with invitation to play
    y: 'Great!',
    n: 'see you next time!'
  },


  {q: 'Is my full name Anastasia?',   //object for 1st y/n question about me
    y: 'Yes, you are right!',
    n: 'Wrong. My name is Anastasia!'
  },


  {q:'Was I born in Ukraine?',        //object for 2nd y/n question about me
    y: 'Wrong. I am from Russia.',
    n: 'Yes! You are right, I was born in Russia.'
  },


  {q: 'Do I like code?',              //object for 3rd y/n question about me
    y: 'Yes! I love coding!',
    n: 'Wrong. I love coding!'
  },


  {q: 'Do I have a cat?',                               //object for 4th y/n question about me
    y: 'Yes! His name is Frodo!',
    n: 'Wrong. I have a cat and his name is Frodo.'
  },

  {q: 'Is pasta my favourite food?' ,                              //object for 5th y/n question about me
    y: 'Wrong! I do not mind pasta but Sushi is my all time favourite.',
    n: 'Yes! I looooove sushi.'
  },

  //object for question about fav number
  {q: 'Guess how many sushi I can eat? Numbers should be 1 to 20',
    wrong1: 'too high. Try again.',
    wrong2: 'too low. Try again.',
    wrong3: 'Please use numbers',
    right:  'you are right!'
  },
  //object for question about countries where i've been
  {q: 'I like to travel! Can you guess what states have I been to already?',
    wrong: 'I have never been there. Try again.',
    right: 'Good guess! I have visited this state!'
  }
];

var userAnswers = [];


//invitation to play a game, with choice to quit
var wantPlay = prompt(gameResponds[0].q);

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
console.log ('Does user want to play?' + wantPlay);

//Array wuth variables for y/n questions about me
var fullName;
var myOrigin;
var likeCode;
var haveCat;
var favFood;
var varArray = [fullName, myOrigin, likeCode, haveCat, favFood];



//question about my name, user must choose 'yes', 'no', 'y', 'n'. If user choses something different while loop repeat the question,
//untill valid answer won't be received.

for (var i = 0; i<varArray.length; i++ ){

  varArray[i] = prompt(gameResponds[i+1].q);

  varArray[i] = varArray[i].toLowerCase();

  while (varArray[i] !== 'yes' &&  varArray[i] !=='no' && varArray[i] !=='y' && varArray[i] !=='n') {
    varArray[i] = prompt(gameResponds[i+1].q);
  }

  if (varArray[i] === 'yes' || varArray[i] === 'y'){
    alert(gameResponds[i+1].y);
    if (gameResponds[i+1].y.substring(0,5) !== 'Wrong') {
      userAnswers.push(1);
    }
  }

  else  {
    alert(gameResponds[i+1].n);
    if (gameResponds[i+1].n.substring(0,5) !== 'Wrong'){
      userAnswers.push(1);
    }

  }
  console.log (gameResponds[i+1].q + " Users answer is: " + varArray[i]);
  console.log ('Users score: ' + userAnswers.length);
}
//question about nuber of sushi that I can eat
var userNum = prompt(gameResponds[6].q);
var myNum = Math.floor((Math.random() * 20) + 1);

for (i = 0; i < 3; i++) {
    
  if (userNum > myNum) {
    userNum = prompt(gameResponds[6].wrong1);
  } else if (userNum < myNum){
    userNum = prompt(gameResponds[6].wrong2);

  } else if (isNaN(userNum)) {
    userNum = prompt(gameResponds[6].wrong3);

  }
}

if (userNum === myNum) {
    alert(gameResponds[6].right);
    userAnswers.push(1);  
}
 //check if this alert respond correctly
if ((i===3)&&(userNum!== myNum)){
  alert('You were very close! I can eat ' + myNum + ' sushi');
}




var myState = ['florida', 'washington', 'california','hawaii', 'oregon','arizona','iowa', 'georgia','alaska'];
var userState = prompt(gameResponds[7].q);
userState = userState.toLowerCase();

for (var j = 0; j < 6; j++) {
  for(i = 0; i<myState.length; i++) {
    if (userState === myState[i]) {
      alert(gameResponds[7].right);
      break;
    }
  } 
  userState = prompt(gameResponds[7].wrong);
}

//check for the right answers 
alert ('Congratulations! You have ' + userAnswers.length + ' correct answers!');
console.log('user have ' + userAnswers.length + ' correct answers');
