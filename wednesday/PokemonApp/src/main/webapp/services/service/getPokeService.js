(function() {

    var getPokeService =  function(pokeDal) {

        this.getPoke = function()
        {
            return pokeDal.getPoke();
        };
    };

    angular.module('pokemonSite').service('getPokeService', ['pokeDal', getPokeService]);
}());
console.log("3");