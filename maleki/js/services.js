angular.module('services').service('personService', function () {
    var personList = [];

    var init = function () {
        function Person(args) {
            this.firstname = args.firstname;
            this.lastname = args.lastname;
            this.identityno = args.identityno;
            this.state = args.state;
            this.city = args.city;
        }
        var person1 = new Person(
            {
                firstname: 'Ali',
                lastname: 'Maleki',
                identityno: 1000000001,
                state: 'Qom',
                city: 'Qom'
            });
        personList.push(person1);

        var p1 = new Person({
            firstname: 'John',
            lastname: 'Due',
            identityno: 1000000002,
            state: 'Tehran',
            city: 'Tehran'
        });
        personList.push(p1);
        personList.push(new Person({
            firstname: 'Jane',
            lastname: 'Due',
            identityno: 1000000003,
            state: 'Tehran',
            city: 'Rey'
        }));
    };

    init();

    var addPerson = function (newObj) {
        personList.push(newObj);
    };

    var getPeople = function () {
        return personList;
    };

    var getPerson = function (id) {
        return personList[id];
    };

    var deletePerson = function (id) {
        personList.splice(id, 1);
    };

    return {
        addPerson: addPerson,
        getPeople: getPeople,
        getPerson: getPerson,
        deletePerson: deletePerson
    };

});