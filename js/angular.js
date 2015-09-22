// sample angular code

var app = angular.module('myApp', ['routes']);

app.controller('myController', function($scope) {
  console.log("controller");
  $scope.player = 0;
  $scope.computer = 0;
  $scope.message = "";

  $scope.play = function(playerChoice) {
    //picks computer input
    var computerChoice = convertToString(pickComputerInput());

    //compares & updates score
    $scope.message = compareChoices(playerChoice, computerChoice);
    };

  $scope.resetScore = function() {
    $scope.player = 0;
    $scope.computer = 0;
  };

////FUNCTIONS/////
  function pickComputerInput() {
    var random = Math.floor(Math.random() * 3);
    return random;
  }

  function convertToString(number) {
    if (number === 0) {
      return "rock";
    } else if (number === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    };

    switch (playerChoice === "rock"){
      case (computerChoice === "paper"):
        $scope.computer ++;
        return "computer wins";

      case (computerChoice === "scissors"):
        $scope.player ++;
        return "player wins";
    }

    switch (playerChoice === "paper"){
      case (computerChoice === "rock"):
        $scope.player ++;
        return "player wins";

      case (computerChoice === "scissors"):
        $scope.computer ++;
        return "computer wins";
    }

    switch (playerChoice === "scissors"){
      case (computerChoice === "paper"):
        $scope.player ++;
        return "player wins";

      case (computerChoice === "rock"):
        $scope.computer ++;
        return "computer wins";
    }
  }




});






