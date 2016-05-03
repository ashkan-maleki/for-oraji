angular.module('directives')
.directive('myIdentity', function() {
    return {
        template: '<div class="form-group" name="formgroup" ng-class="' + '{' + "'has-error'" +
            ': (personform.$submitted || personform.identityno.$touched) && (personform.identityno.$error.required || personform.identityno.$error.min || personform.identityno.$error.max)}">' +
            '<label for="identityno" class="control-label hidden">lastname</label>' +
            '<div class="col-sm-12" name="col">' +
            '<input type="number" min="1000000000" max="9999999999" class="form-control" ' +
            'ng-model="person.identityno" id="identityno" name="identityno"' +
            ' placeholder="Enter your identityno" required />' +
            '<span id="helpBlock2" class="help-block" ng-show="personform.$submitted || personform.identityno.$touched">' +
            '<span ng-show="personform.identityno.$error.required">Please, tell us your identity number.' +
            '</span><span ng-show="personform.identityno.$error.min">identity has 10 digit.</span>' +
            '<span ng-show="personform.identityno.$error.max">identity has 10 digit.</span></span></div></div>'
}
});