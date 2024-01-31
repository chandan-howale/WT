angular.module('salaryApp', [])
  .controller('salaryCtrl', function ($scope) {
    $scope.employee = {
      firstName: '',
      lastName: '',
      hra: 0,
      da: 0,
      basic: 0,
    };

    $scope.calculateSalary = function () {

      $scope.totalSalary = $scope.employee.hra + $scope.employee.da + $scope.employee.basic;
      
    };
  });
