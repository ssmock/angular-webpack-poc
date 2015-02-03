require("angular"); // Global
require("angular-route");

require("./a/a-main.html");
require("./b/b-main.html");

angular.module("app", ["ngRoute"]).config(config);

config.$inject = ["$routeProvider"];

function config($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "main-main.html",
            controller: "Main",
            controllerAs: "Main"
        })
        .when("/a", {
            templateUrl: "a-main.html"
        })
        .when("/b", {
            templateUrl: "b-main.html"
        });
}

require("./main/main-controller");