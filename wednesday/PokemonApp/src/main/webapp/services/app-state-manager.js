"use strict";

(function () {

    angular.module('pokemonSite').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/battle");


        $stateProvider.state("battle", {
            url: "/battle",
            templateUrl: "app/feature/PokeBattler/pokeBattle.html"
        }).state("search", {
            url:"search",
            templateUrl:"app/feature/PokeSearch/pokeSearch.html"
        }).state("box", {
            url: "/box",
            templateUrl: "app/feature/PokeBox/pokeBox.html"

        })
    });
}());
/*change anything that says book store */