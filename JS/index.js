
// FUNCTIONS
  var Scene = function(option) {
    this.imageOne = option.imageOne;
    this.imageTwo = option.imageTwo;
    this.question = option.question;
    this.buttonOne = option.buttonOne;
    this.buttonTwo = option.buttonTwo;
    this.option1 = null;
    this.option2 = null;
  };



// DIFFERENT SCENES
var foodScene = new Scene({
  imageOne: "./images/dimsum.jpg",
  imageTwo: "./images/fancybar2.jpg",
  question: "It's 12pm. Time to Eat. Where do you go?",
  buttonOne: "Dim Sum!!!",
  buttonTwo: "Swanky Restaurant"
});

var carbOverloadScene = new Scene({
  imageOne: "./images/junk.jpg",
  imageTwo: "./images/footMassage.jpg",
  question: "Now you're full on carbs. Your friend has let you know their Junk boat is picking up more passengers at Central Pier. Do you get on the junk  - or would you prefer to have a Foot massage?",
  buttonOne: "Junk party!!!",
  buttonTwo: "Foot Massage"
});

var foodPoisonScene = new Scene({
  imageOne: "./images/hkTaxi.jpg",
  imageTwo: "./images/hkMtr.jpeg",
  question: "The swanky restaurant in Central gave you food poisoning and you feel ill immediately. You need to get to the hospital ASAP - how do you travel?",
  buttonOne: "Hong Kong taxi",
  buttonTwo: "MTR and then walk (run)"
});

var afterJunkScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/14517.jpg",
  question: "The junk dropped you off at central pier where you continued to drink until 10pm. You are now wasted. Where would you like to go?",
  buttonOne: "LKF woohoo!!!",
  buttonTwo: "WanChai woohoo!!!",
});

var afterFootScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/14517.jpg",
  question: "After the foot massage, you decided to get a 3 hour body massage. You are now ready to party - where do you go?",
  buttonOne: "LKF woohoo!!!",
  buttonTwo: "WanChai woohoo!!!",
});

var afterTaxiScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/14517.jpg",
  question: "You have now been dropped off by a Taxi. Well done.",
  buttonOne: "afterTaxi option 1!!!",
  buttonTwo: "afterTaxi option 2!!!",
});

var afterMtrScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/14517.jpg",
  question: "You caught the MTR. Well done.",
  buttonOne: "afterMTR option1!!!",
  buttonTwo: "afterMTR option2!!!",
});

var lkfScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/14517.jpg",
  question: "You are now in LKF. Where do you drink?",
  buttonOne: "7 Eleven all the way!!!",
  buttonTwo: "Dragon I!",
});

var wanChaiScene = new Scene({
  imageOne: "./images/HK1.jpg",
  imageTwo: "./images/14517.jpg",
  question: "You are now in Wanchai. What do you want to do?",
  buttonOne: "Karaoke!!!",
  buttonTwo: "Drink!!!",
});

// MAPPING THE GAME
foodScene.option1 = carbOverloadScene;
foodScene.option2 = foodPoisonScene;
carbOverloadScene.option1 = afterJunkScene;
carbOverloadScene.option2 = afterFootScene;
foodPoisonScene.option1 = afterTaxiScene;
foodPoisonScene.option1 = afterMtrScene;
afterJunkScene.option1 = lkfScene;
afterJunkScene.option2 = wanChaiScene;

// TO START THE GAME
$(document).ready(function(){

  var setCurrentScene = function() {
    $(".imageOne").attr("src", currentScene.imageOne);
    $(".imageTwo").attr("src", currentScene.imageTwo);
    $(".question").text(currentScene.question);
    $(".buttonOne").text(currentScene.buttonOne);
    $(".buttonTwo").text(currentScene.buttonTwo);
  }

  var currentScene = foodScene;

  setCurrentScene();

  // BUTTON ONE

// STARTING PAGE

  $(".buttonOne").on("click", function(){
  currentScene = currentScene.option1;
  setCurrentScene();
  });

  $(".buttonTwo").on("click", function(){
  currentScene = currentScene.option2;
  setCurrentScene();
  });

//FOOD SCENE --- SWANKY RESTAURANT OPTION 2
  // $(".buttonOne").on("click", function(){
  // currentScene = foodPoisonScene.option1;
  // foodPoisonScene.option1 = afterJunkScene;
  // setCurrentScene();
  // });

  // $(".buttonTwo").on("click", function(){
  // currentScene = foodPoisonScene.option2;
  // foodPoisonScene.option2 = afterFootScene;
  // setCurrentScene();
  // });


//FOOD POISON SCENE

  // $(".buttonOne").on("click", function(){
  //   currentScene = afterJunkScene.option1;
  //   afterJunkScene.option1 = lkfScene;
  //   setCurrentScene();
  // });








//DON'T DELETE THE BELOW
});











