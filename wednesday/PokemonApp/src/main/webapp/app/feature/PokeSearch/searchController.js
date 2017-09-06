(function() {

    var SearchController =  function(getPokeService) {
        var vm = this;


        function init() {
            getPokeService.getPoke().then(function (results) {
                // console.log("In book controller about to return data to the client with results" + results);
                console.log("why am i floating");
                console.log(results);
                vm.pokemon  = results;
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }
        init();


    };


    angular.module('pokemonSite').controller('SearchController', ['getPokeService',SearchController]);
}());
