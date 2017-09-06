"use strict";

(function () {

    angular.module("pokemonSite").service("pokeDal", ["dal", pokeDal]);

    function pokeDal (dal) {

        this.getPoke = function () {
            return dal.http.GET("http://pokeapi.co/api/v2/pokemon/1/");
        };

        this.savePoke = function (pokemonToSave) {
            return dal.http.POST("http://pokeapi.co/api/v2/pokemon/1/", pokemonToSave);
        };

        this.updatePoke = function (pokemonToUpdate) {
            return dal.http.PUT("http://pokeapi.co/api/v2/pokemon/1/", pokemonToUpdate);
        };

        this.deletePoke = function (pokemonToDelete) {
            return dal.http.DELETE("http://pokeapi.co/api/v2/pokemon/1/", pokemonToDelete);
        };

    }
}());
console.log("4");