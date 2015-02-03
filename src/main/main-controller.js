require("angular");
require("./some-service");

require('./main-main.html');

angular.module("app").controller("Main", mainController);

mainController.$inject = [];

function mainController() {
    var vm = this;

    vm.TestVal = "Test value!";
    vm.TestAr = [1, 2, 3, 4, 5];
}