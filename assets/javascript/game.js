//variables needs (add as you go) 


var words = ["AFGHANISTAN","ARMENIA","AZERBAIJAN","BAHRAIN","BANGLADESH","BHUTAN","BRUNEI","CAMBODIA","CHINA","CYPRUS","GEORGIA","INDIA","INDONESIA","IRAN","IRAQ","ISRAEL","JAPAN","JORDAN","KAZAKHSTAN","KUWAIT","KYRGYZSTAN","LAOS","LEBANON","MALAYSIA","MALDIVES","MONGOLIA","MYANMAR","NEPAL","NORTHKOREA","OMAN","PAKISTAN","PALESTINE","PHILIPPINES","QATAR","RUSSIA","SAUDIARABIA","SINGAPORE","SOUTHKOREA","SRILANKA","SYRIA","TAIWAN","TAJIKISTAN","THAILAND","TIMORLESTE","TURKEY","TURKMENISTAN","UAE","UZBEKISTAN","VIETNAM","YEMEN"]; //arrays of words
var randomWords = words[Math.floor(Math.random() * words.length)];// random words
console.log(randomWords); //random word selection
var guessingWord =[]; //to be used for display "-" or the correct word
var maxTries = 10; //count 
var wins = 0;
var chances =10;
var guessedletters =[]; // 
var gameOver = false;



 /*
functions
 */

function prepareGame(){

    guessingWord= [];
    for (var i = 0; i < randomWords.length; i++) {
        guessingWord.push("-");
    }   
    show();
}

prepareGame();


function show(){
    
    document.getElementById("totalWins").innerHTML = wins; // total wins

    document.getElementById("")

    var guessingWordText = "";
    for (var i = 0; i < guessingWord.length; i++) {
      //  console.log(guessingWordText);
        guessingWordText += guessingWord[i];
    }

    document.getElementById("currentWord").innerText = guessingWordText;
    document.getElementById("chances").innerText = chances;
    document.getElementById("letters").innerText = guessedletters;
}; //works until here

 
//onkey up

document.onkeyup = function(event){
    //keycode 65 to 90 A -
    var letter = event.key.toUpperCase();
    
    console.log(letter);
    if(event.keyCode >= 65 && event.keyCode <= 90){
        guess(letter);
   // console.log("here");
        show();
    }
}

//pushing the letters to the guessletter array 
function guess(letter){
    if (guessedletters.indexOf(letter) === -1) //adds too the guessedletter only if its unique
    {
        guessedletters.push(letter);
        main(letter); // to main function to compare with the guess array
        show(); // call the show function to display
        win();
       loss();
    }
}

function main(letter){
var hit = false; // to count again the chances if the key was a miss

        // this section is to compare the letter pressed agains the random word
    for (var i = 0; i < randomWords.length; i++){ 
        if(letter === randomWords[i]){
            guessingWord[i] = letter;
            console.log(hit);
            hit = true;
        }
        
     console.log(hit);
    }
if (hit != true){
    chances --; // if the hit is false then the chance is gone
}
}



function win(){
    if (chances > 0){
        if (guessingWord.indexOf("-") === -1){
            wins++;
            gameOver = true;
        }
    }

}

function loss(){
    if (chances == 0){
        console.log("lost");
        gameOver = true;
    }
    
}


