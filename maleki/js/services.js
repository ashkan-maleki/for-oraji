angular.module('services').service('personService', function () {
    var personList = [];

    var addPerson = function (newObj) {
        personList.push(newObj);
    };

    var getPeople = function () {
        return personList;
    };

    var getPerson= function (id) {
        return personList[id];
    };

    return {
        addPerson: addPerson,
        getPeople: getPeople,
        getPerson: getPerson
    };

});