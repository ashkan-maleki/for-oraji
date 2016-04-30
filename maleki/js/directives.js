angular.module('directives')
.directive('myIdentity', function() {
    return {
        template: '<input type="number" min="1000000000" max="9999999999" ng-model="person.identityno" name="identityno" required />' +
                    '<div ng-show="personform.$submitted || personform.identityno.$touched">' +
                    '<div ng-show="personform.identityno.$error.required">Tell us your identity.</div>' +
                    '<div ng-show="personform.identityno.$error.min">identity has 10 digit.</div>' +
                    '<div ng-show="personform.identityno.$error.max">identity has 10 digit.</div>' +
                    '</div>'
}
});