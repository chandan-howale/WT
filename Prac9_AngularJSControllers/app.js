angular.module('myApp', [])
  .controller('personCtrl', function ($scope) {
    $scope.people = [
      { name: 'Chandan Howale', city: 'Ratnagiri' },
      { name: 'Om Awasare', city: 'Shirgaon' },
      { name: 'Sumit Jakhal', city: 'Mumbai' },
      { name: 'Sahil Chavan', city: 'Rajapur' },
      { name: 'Idranil Angolkar', city: 'Sawantwadi' },
      { name: 'Nitant Deulakar', city: 'Kankavli' },
      { name: 'Tanmay Joglekar', city: 'Chiplun' },
      { name: 'Akshay Narvekar', city: 'Pawas' }
    ]; 
    $scope.sortColumn = function (key) {
        $scope.sortKey = key;
    };
  });
