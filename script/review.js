/******************************************************************************
Final Assignment
Alexandre Paquette
Date: April 19, 2021
Class: CIS123
Program Description:
This script manages the review section of the Jojo's Bizzare Adventure wiki.
*******************************************************************************/
"use strict";

window.addEventListener("load", initialize);

//initialize function that runs when the webpage loads
function initialize(){

  //creates stars variable containing each star from the webpage
  var stars = document.querySelectorAll("span#stars img");

  //changes the cursor type when hovering over any stars
  //add event listener to each star to check for mouse click
  for(var x = 0; x < stars.length; x++){
    stars[x].style.cursor = "pointer";
    stars[x].addEventListener("mouseenter", flip);
  }
  //increment character count every time a key is entered in the review field
  document.getElementById("review").addEventListener("keyup", incr);

}

//Flips the stars when they're hovered over
function flip() {
  var starNum = this.alt;
  var stars = document.querySelectorAll("span#stars img");
  //flip the stars when they're hovered over
  for(var x = 0; x < starNum; x++){
    stars[x].src = "../images/star2.png";
  }
  for(var x = starNum; x < 5; x++){
    stars[x].src = "../images/star.png";
  }
  //set the text next to stars to number of stars + stars
  document.getElementById("rating").value = starNum + " Stars";
  //flop the star back when no longer hovering
  this.addEventListener("mouseleave", flop);
  //remove event listener for a star when it is clicked
  this.addEventListener("click", stop);
}

//Flops the stars back when they're no longer being hovered over
function flop() {
  var stars = document.querySelectorAll("span#stars img");
  for(var x = 0; x < 5; x++){
    stars[x].src = "../images/star.png";
  }
  document.getElementById("rating").value = "";
}

//stops the flipping of star
function stop(){
  this.removeEventListener("mouseleave", flop);
}

//increment word count
function incr(){
  var reviewText = document.getElementById("review").value;
  var charCount = count(reviewText);
  var wordCount = document.getElementById("wordCount");
  wordCount.value = charCount + "/1000";
  if(charCount > 1000){
    wordCount.style.color = "red";
  }else{
    wordCount.style.color = "white";
  }
}

//counts the number of characters from a given string and returns the length
function count(review) {
   var reviewregx = /\s/g;
   var charCount = review.replace(reviewregx, "");
   return charCount.length;
}
