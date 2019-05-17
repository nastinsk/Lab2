'use strict';

//Array wuth variables for y/n questions about me
var fullName;
var myOrigin;
var likeCode;
var haveCat;
var favFood;
var varArray = [fullName, myOrigin, likeCode, haveCat, favFood];
var userAnswers = [];

function userPoints(){
  console.log ('user score: ' + userAnswers.length);
}



//variable to use in the 6th question
var myNum = Math.floor((Math.random()*20)+1);

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
    wrong4: 'You used all your tries. I can eat ' + myNum +' sushi!',
    right:  'you are right! I can eat ' + myNum +' sushi!'
  },
  //object for question about countries where i've been
  {q: 'I like to travel! Can you guess what states have I been to already?',
    wrong: 'I have never been there. Try again.',
    right: 'Good guess! I have visited this state!'
  }
];



//invitation to play a game, with a choice to quit
var wantPlay = prompt(gameResponds[0].q);
wantPlay= wantPlay.toLowerCase();


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
console.log ('Does user want to play? ' + wantPlay);





//question about me, user must choose 'yes', 'no', 'y', 'n'. If user choses something different while loop repeat the question,
//untill valid answer won't be received.

function fiveQuesitons(gameResponds, varArray){ //gamesResponds[i+1]

  //for (var i = 0; i<varArray.length; i++ ){

  varArray= prompt(gameResponds.q);
  varArray= varArray.toLowerCase();

  while (varArray !== 'yes' && varArray !=='no' && varArray !=='y' && varArray !=='n') {
    varArray = prompt(gameResponds.q);
  }

  if (varArray === 'yes' || varArray === 'y'){
    alert(gameResponds.y);
    if (gameResponds.y.substring(0,5) !== 'Wrong') {
      userAnswers.push(1);
    }
  }

  else{
    alert(gameResponds.n);
    if (gameResponds.n.substring(0,5) !== 'Wrong'){
      userAnswers.push(1);
    }

  }
  console.log (gameResponds.q + ' Users answer is: ' + varArray);
  userPoints();
}
//}

for (var i = 0; i<varArray.length; i++ ){
  fiveQuesitons(gameResponds[i+1],varArray[i]);
}

//6th question about the number of sushi that I can eat
//only allows 4 guess

var userNum = prompt(gameResponds[6].q);

for (var b=0;  b < 4; b++){

  if (b === 3 && userNum !== myNum){
    alert(gameResponds[6].wrong4);
    break;

  }
  if (userNum< myNum){

    userNum = Number(prompt(gameResponds[6].wrong2));

  } else if (userNum>myNum) {

    userNum = Number(prompt(gameResponds[6].wrong1));

  } else if (userNum === myNum){

    alert(gameResponds[6].right);
    userAnswers.push(1);
    console.log('the user guess is right');
    break;

  }else{

    userNum = Number(prompt(gameResponds[6].wrong3));

  }
}
userPoints();

//7th question
//only 6 guesses

var myState = ['florida', 'washington', 'california','hawaii', 'oregon','arizona','alaska'];

var isCorrect = 'false';

var j = 0;

while (j<6) {

  var userState = prompt(gameResponds[7].q);
  userState = userState.toLowerCase();
  j++;

  for(var a = 0; a<myState.length; a++){

    if (userState === myState[a] ){
      alert(gameResponds[7].right);
      isCorrect = 'true';
      userAnswers.push(1);
      break;
    }
  }

  if(isCorrect === 'true'){
    break;
  }
}

userPoints();
alert('Congratulations! You got ' + userAnswers.length + ' questions correct out of 7.');
