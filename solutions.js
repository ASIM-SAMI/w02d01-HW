// 1. What is the difference between a parameter and an argument?

//  prameters: are the names after the funcation name,
//  we can use them as inputs values inside the function.

//  arguments: the values we pass it to the function  when we call it.

//==================================

// 2. Within a function, what is the difference between return and console.log?

// return: give us the values when we call the function, after execute the codes in that function.

// console.log: to print any values u want to showup in the console of the browser.

function checkPalindrome(word){
   
   var splitWord = word.split("");

   var reverseArray = splitWord.reverse();

   var joinArray = reverseArray.join("");
   
   if(word.toLowerCase() === joinArray.toLowerCase()){
       return true;
   }else{
       return false;
   }

 }

 // True exp.
 console.log(checkPalindrome("Radar"));
 // False exp
 console.log(checkPalindrome("Borscht"));

//==================================



function sumArray(array){
    var sumOfArray = 0;
    for(var i = 0; i < array.length; i++){
   
        sumOfArray += array[i];
       
    }
    return sumOfArray
}


//==================================


console.log("The sum of array numbers is: "+sumArray([1,2,3,4,5,6]));


function checkPrime(num){

    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }

    return num > 1;

}

console.log(checkPrime(2))

function printPrimes(num){
    let primeNumber = "";
    for(var i = 0; i <= num; i++){
        if(checkPrime(i)){
            primeNumber += ""+i+" it's a prime number.\n\n";
        }
        
    }
   return primeNumber;
}

console.log(printPrimes(97));



//==================================


function randomMove(){


     let randomNum = Math.floor(Math.random() * 3); 
     if(randomNum === 0){
        return "Scissors";
     }else if(randomNum === 1){
        return "Rock";
  
     }else if(randomNum === 2){
        return "Paper";
    
     
    }

}



function rockPaperScissors(playOfUser){
    let playOfAI = randomMove();
    if(
        (playOfUser === "Paper" && playOfAI === "Rock") || 
       (playOfUser === "Scissors" && playOfAI === "Paper")||
       (playOfUser === "Rock" && playOfAI === "Scissors")
       ){
            return 1;
       }
       else if(
           (playOfUser === "Rock" && playOfAI === "Paper") ||
           (playOfUser === "Paper" && playOfAI === "Scissors")||
           (playOfUser === "Scissors" && playOfAI === "Rock")
           ){
            return 0;
               }else if(playOfUser === playOfAI){
                   return 2;
               }

}
let rockPaperScissorsGames =
rockPaperScissors(prompt("Enter your move. Try me :) => ( Rock, Paper, Scissors) : "));
if(rockPaperScissorsGames === 1){
    console.log("Congratulations You Win!! :) ");
}else if(rockPaperScissorsGames === 0){
    console.log("You lose :( ");

}else if(rockPaperScissorsGames === 2){
    console.log("hahaha we equals!! try again with me!");

}

//==================================
