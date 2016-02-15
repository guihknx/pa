var myApp = angular.module('myApp',[]);

myApp.controller('Palindrome', ['$scope', function($scope) {

  $scope.check = function(){
    var input = $scope.input;
    var reverse =   input.split("").reverse().join("");
    if( reverse !== input ){
      $scope.result = input + ' is not Palindrome!';
      return;
    }
    $scope.result = input + ' is Palindrome';
  };
}]);