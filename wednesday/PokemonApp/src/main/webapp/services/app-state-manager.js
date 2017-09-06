"use strict";

(function () {

    angular.module('pokemonSite').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/book");

        $stateProvider.state("battler", {
            url: "/Battler",
            templateUrl: "app/feature/PokeBattler/pokeBattle.html"
        }).state("box", {
            url: "/box",
            templateUrl: "app/feature/PokeBox/pokeBox.html"
        }).state("search", {
            url:"search",
            templateUrl:"app/feature/PokeSearch/pokeSearch.html"
        })
    });
}());
/*change anything that says book store */