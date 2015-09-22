var app = angular.module('myApp', ['routes', 'factories']);

app.controller('myController', ['rpsFactory', '$scope', function(rpsFactory, $scope) {
  $scope.player = 0;
  $scope.computer = 0;
  $scope.message = "";

  $scope.play = function(playerChoice) {
    //picks computer input
    var computerChoice = rpsFactory.convertToString(rpsFactory.pickComputerInput());

    //winner is decided
    var result = rpsFactory.compareChoices(playerChoice, computerChoice);

    //update scoreboard
    updateScore(result);

    //display winner
    $scope.message = rpsFactory.showMessage(result);
  };

  $scope.resetScore = function() {
    $scope.player = 0;
    $scope.computer = 0;
  };

  function updateScore(result) {
    switch (result) {
      case ("computer"):
        $scope.computer++;
        break;
      case ("player"):
        $scope.player++;
        break;
    }
  }

}]);
