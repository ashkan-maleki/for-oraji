angular.module('controllers')
    .controller('AddController', ['$scope', 'personService', '$location', 'filterFilter',
        function ($scope, personService, $location, filterFilter) {
            function Person(args) {
                this.firstname = args.firstname;
                this.lastname = args.lastname;
                this.identityno = args.identityno;
                this.state = args.state;
                this.city = args.city;
            }

            $scope.person = new Person(
            {
                firstname: '',
                lastname: '',
                identityno: '',
                state: '',
                city: ''
            });

            $scope.states = [
                'Qom', 'Tehran'
            ];

            $scope.cities = [];

            $scope.$watch('person.state', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.person.city = "";
                }
                if (newValue === "Qom") {
                    $scope.cities = ['Qom', 'Kahak'];
                } else {
                    $scope.cities = ['Tehran', 'Rey'];
                }

            });

            $scope.savePerson = function () {
                if ($scope.personform.$valid) {
                    personService.addPerson($scope.person);
                    $scope.people = personService.getPeople();
                    $location.path('/view');
                }
            }
        }
    ])
.controller('ViewController', ['$scope', 'personService', function ($scope, personService) {
    $scope.people = personService.getPeople();

    $scope.deletePerson = function (id) {
        personService.deletePerson(id);
        // $scope.people = personService.getPeople();
    }
}])
.controller('EditController', ['$scope', 'personService', '$routeParams', '$location',
    function ($scope, personService, $routeParams, $location) {
        var id = $routeParams.id;
        $scope.person = personService.getPerson(id);

        $scope.states = [
                    'Qom', 'Tehran'
        ];

        $scope.$watch('person.state', function (newValue, oldValue) {
            if (newValue !== oldValue) {
                $scope.person.city = "";
            }
            if (newValue === "Qom") {
                $scope.cities = ['Qom', 'Kahak'];
            } else {
                $scope.cities = ['Tehran', 'Rey'];
            }
        });

        $scope.savePerson = function () {
            //personService.addPerson($scope.person);
            //$scope.people = personService.getPeople();
            $location.path('/view');
        }
    }])
    .controller('DeleteController', ['$scope', 'personService', '$routeParams', '$location',
        function ($scope, personService, $routeParams, $location) {
            var id = $routeParams.id;


        }]);