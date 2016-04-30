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
                'qom', 'tehran'
            ];

            $scope.cities = [];

            $scope.$watch('person.state', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.person.city = "";
                }
                if (newValue === "qom") {
                    $scope.cities = ['qom', 'kahak'];
                } else {
                    $scope.cities = ['tehran', 'rey'];
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
    function Person(args) {
        this.firstname = args.firstname;
        this.lastname = args.lastname;
        this.identityno = args.identityno;
        this.state = args.state;
        this.city = args.city;
    }
    var person1 = new Person(
            {
                firstname: 'ali',
                lastname: 'maleki',
                identityno: '12345',
                state: 'qom',
                city: 'kahak'
            });
    personService.addPerson(person1);

    var p1 = new Person({
            firstname: 'john',
            lastname: 'due',
            identityno: '12346',
            state: 'tehran',
            city: 'tehran'
        });
        personService.addPerson(p1);

    $scope.people = personService.getPeople();
}])
.controller('EditController', ['$scope', 'personService', '$routeParams', '$location',
    function ($scope, personService, $routeParams, $location) {
    var id = $routeParams.id;
    $scope.person = personService.getPerson(id);

    $scope.states = [
                'qom', 'tehran'
    ];

    $scope.$watch('person.state', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            $scope.person.city = "";
        }
        if (newValue === "qom") {
            $scope.cities = ['qom', 'kahak'];
        } else {
            $scope.cities = ['tehran', 'rey'];
        }
    });

    $scope.savePerson = function () {
        //personService.addPerson($scope.person);
        //$scope.people = personService.getPeople();
        $location.path('/view');
    }
    }]);