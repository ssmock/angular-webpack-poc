require("angular");

angular.module("app").factory("someService", someService);

someService.$inject = [];

function someService() {
    return {
        Something: "WAT"
    };
}