var myApp = angular.module('formulaire');

myApp.controller('valueController', function($scope) {
    console.log(form.value.name);
    $scope.name = form.value.name
    console.log(form.value.specialite);
    $scope.specialite = form.value.specialite
    console.log(form.value.year);
    $scope.year = form.value.year
    console.log(form.value.desc);
    $scope.desc = form.value.desc
  }
});