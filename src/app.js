require("angular"); // Global
require("angular-route");

require("./views/a.html");
require("./views/b.html");

angular.module("app", ["ngRoute"]).config(config);

config.$inject = ["$routeProvider"];

function config($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "main.html",
            controller: "Main",
            controllerAs: "Main"
        })
        .when("/a", {
            templateUrl: "a.html"
        })
        .when("/b", {
            templateUrl: "b.html"
        });
}

require("./main-controller");