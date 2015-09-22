angular.module('factories', [])
  .factory('rpsFactory', [function(){
    return{
      pickComputerInput : function() {
        var random = Math.floor(Math.random() * 3);
        return random;
      },
      convertToString : function(number) {
        if (number === 0) {
          return "rock";
        } else if (number === 1) {
          return "paper";
        } else {
          return "scissors";
        }
      },
      compareChoices : function(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
          return null;
        } else if (playerChoice === "rock") {
            if (computerChoice === "paper") {
              return "computer";
            }
            else {
              return "player";
            }
        } else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
              return "player";
            } else {
              return "computer";
            }
        } else {
          if (computerChoice === "paper") {
            return "player";
          } else {
            return "computer";
          }
        }
      },
      showMessage : function(result) {
        if (result === "computer") {
          return "Computer Wins";
        } else if (result === "player") {
          return "Player Wins";
        } else {
          return "Tie!";
        }
      }
    };

  }]);
