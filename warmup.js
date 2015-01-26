//create anonymous function to keep it local
// make it run immediately

// set the classes: Game, Racetrack, Christmastree, Dragster

// set the car in pre-stage area
// pre-stage lights yellow
// engine off
//////
// engine on if keyboard key
// if engine on, dragster can move
/////
// if dragster in staging area, stage light to turn on
// next 3 sets of lights with 0.5 seconds between them
// green light
// if driver over start line before greeb light, switch last light to red and the race is over
//////
// if game starts (green light), race timer starts
/////
// if crossing finish line stop timer
//////

(function() {

var Game = function () {
// this class manages game state
// initialize a christmas tree
    this.Christmastree = new Christmastree ();
// initialize the race track
    this.Racetrack = new Racetrack ();
// initialize the player dragster
    this.Dragster = new Dragster ();
// initialize attachlisteners    
    this.attachListeners();
  };

var Christmastree = function () {
// this class manages the race track        QUESTION: WHEN ADD FUNCTION IN THIS PART WHERE IS CLASS DEFINED & WHEN PROTOTYPE

// get a reference to the pre stage lights html element
    this.$preStageLights = document.getElementsByClassName("pre-stage");
    this.$countdown1 = document.getElementsByClassName("countdown1");
    this.$countdown2 = document.getElementsByClassName("countdown2");
    this.$countdown3 = document.getElementsByClassName("countdown3");
    this.greenLight = "off";
    

  // reset the christmas tree every time it's initialized
    this.reset();

  };
// this class manages the car 
 
 var Dragster         = function() {

 // grab the car element
    this.$el = document.getElementById('racer');
    // set the starting position of the dragster
    this.$el.style.left = "0px";
  this.engine = "off";
  };

 var Racetrack         = function() {
// this class manages the race track
  };

  var counter = 0;

                                                    //// CHRISTMAS TREE FUNCTIONALITIES
                                                    //// CHRISTMAS TREE FUNCTIONALITIES

 Christmastree.prototype.reset = function() {
    // append the css on class to the pre stage lights
    // so that they show up as yellow
    this.$preStageLights.className = "pre-stage";
  };

  Christmastree.prototype.yellowOn = function () {
    // get a reference to the pre stage lights html element
    this.$preStageLights = document.getElementsByClassName("pre-stage");

    for (var i = 0; i < this.$preStageLights.length; i++) {
      console.log("checkpoint yellow");
      this.$preStageLights[i].style.background = "yellow";
    }
  };

    Christmastree.prototype.stageLightsOn = function () {
    // get a reference to the stage lights html element
    this.$stageLights = document.getElementsByClassName("stage");

    for (var i = 0; i < this.$stageLights.length; i++) {
      console.log("checkpoint Stage yellow");
      this.$stageLights[i].style.background = "yellow";
    }
  };

    Christmastree.prototype.countdownOn = function () {
      //COUNTDOWN 1
      setTimeout( function () {
          this.$countdown1 = document.getElementsByClassName("countdown1");
    for (var i = 0; i < this.$countdown1.length; i++) {
      console.log("checkpoint Stage yellow");
      this.$countdown1[i].style.background = "orange";
    }
      }, 1000);

       //COUNTDOWN 2
       setTimeout( function () {
        this.$countdown2 = document.getElementsByClassName("countdown2");
    for (var i = 0; i < this.$countdown2.length; i++) {
      console.log("checkpoint Stage yellow");
      this.$countdown2[i].style.background = "orange";
    }
      }, 2000);

        //COUNTDOWN 3
       setTimeout( function () {
        this.$countdown3 = document.getElementsByClassName("countdown3");
    for (var i = 0; i < this.$countdown3.length; i++) {
      console.log("checkpoint Stage yellow");
      this.$countdown3[i].style.background = "orange";
    }
      }, 3000);

        //GREEN START LIGHT                 QUESTION: WHY IS IT NOT POSSIBLE TO CHANGE Christmastree.greenLight from here
       setTimeout( function () {
           
        this.$startLight = document.getElementsByClassName("startLight");
    for (var i = 0; i < this.$startLight.length; i++) {
      console.log("checkpoint Stage yellow");
      this.$startLight[i].style.background = "green";
    }
      }, 4000);

       //FALSE START CHECK
        setTimeout( function () {
      
           console.log("hoppa " + this.Christmastree.greenLight);
      }, 4000);

   };

                                                    //// DRAGSTER FUNCTIONALITIES
                                                     //// DRAGSTER FUNCTIONALITIES

 Dragster.prototype.advance = function() {
    // this should move the car across the screen 1px at a time
    this.$el.style.left = parseInt(this.$el.style.left, 10) + 3 + "px";
  };

  Dragster.prototype.backwards = function() {
    // this should move the car across the screen 1px at a time
    this.$el.style.left = parseInt(this.$el.style.left, 10) - 3 + "px";
  };

  Dragster.prototype.engineOn = function () {
      this.engine = "on";
      console.log("the engine is now " + this.engine);
  };

    Dragster.prototype.engineOff = function () {
      this.engine = "off";
     alert("GAME OVER - you passed the startlight before the greenlight switched on");
      console.log("the engine is now " + this.engine);
  };

                                                      //// GAME FUNCTIONALITIES
                                                    //// GAME FUNCTIONALITIES
Game.prototype.attachListeners = function () {
   var self = this;
    // listen for user input, specifically
        window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39 && self.Dragster.engine === "on") {
          counter++;
          console.log("counter:" + counter);
          self.Dragster.advance();
      }

if (event.keyCode === 37 && self.Dragster.engine === "on") {
          counter--;
          console.log("counter:" + counter);
          self.Dragster.backwards();
      }

      if (event.keyCode === 13) {
           // STILL TO DO: set engine on
            self.Dragster.engineOn();
            console.log("vroom");
            self.Christmastree.yellowOn();
          }    

      if (counter === 12) {
            self.Christmastree.stageLightsOn();
            self.Christmastree.countdownOn();
      }

       if (counter === 25) {
        console.log("check" + self.Christmastree.greenLight);
       }

             self.Christmastree.$startLight = document.getElementsByClassName("startLight");
          if (counter === 30 && self.Christmastree.$startLight.getAttribute("background") !== "green"){
      // if (counter === 30 && self.Christmastree.greenLight === "off") {
           
            self.Dragster.engineOff();
            console.log("GAME OVER");
           
      }

    });
  };

  // run it

new Game();

})();





