// 1. What is the difference between a parameter and an argument?

//  prameters: are the names after the funcation name,
//  we can use them as inputs values inside the function.

//  arguments: the values we pass it to the function  when we call it.

//==================================

// 2. Within a function, what is the difference between return and console.log?

// return: give us the values when we call the function, after execute the codes in that function.

// console.log: to print any values u want to showup in the console of the browser.

// function checkPalindrome(word){
   
//    var splitWord = word.split("");

//    var reverseArray = splitWord.reverse();

//    var joinArray = reverseArray.join("");
   
//    if(word.toLowerCase() === joinArray.toLowerCase()){
//        return true;
//    }else{
//        return false;
//    }

//  }

//  // True exp.
//  console.log(checkPalindrome("Radar"));
//  // False exp
//  console.log(checkPalindrome("Borscht"));

// //==================================



// function sumArray(array){
//     var sumOfArray = 0;
//     for(var i = 0; i < array.length; i++){
   
//         sumOfArray += array[i];
       
//     }
//     return sumOfArray
// }



// console.log("The sum of array numbers is: "+sumArray([1,2,3,4,5,6]));


