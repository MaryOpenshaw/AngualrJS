(function() {

    var FilmController =  function($scope) {
        $scope.sortby = 'Title';
        $scope.reverse = false;

        $scope.filmList = [{

            'Title': 'Rogue One',
            'Date': '2016',
            'Genre': 'Sci-fi'
        }, {

            'Title': 'Captain America',
            'Date': '2016',
            'Genre': 'Superhero'

        }, {

            'Title': 'Star Trek',
            'Date': '2016',
            'Genre': 'Sci-fi'
        }, {

            'Title': 'Wonder Woman',
            'Date': '1/7/2017',
            'Genre': 'Superhero'
        }, {

            'Title': 'Logan',
            'Date': '1/3/2017',
            'Genre': 'Superhero'
        }, {

            'Title': 'The LEGO Batman Movie',
            'Date': '10/2/2017',
            'Genre': 'Animation'

        }, {

            'Title': 'Guardians of The Galaxy',
            'Date': '28/4/2017',
            'Genre': 'Superhero, Sci-Fi'

        }, {

            'Title': 'Spider-Man: Homecomming',
            'Date': '5/7/2017',
            'Genre': 'Superhero'

        }, {

            'Title': 'Ghost In The Shell',
            'Date': '30/3/2017',
            'Genre': 'Superhero'

        }, {

            'Title': 'Zootropolis',
            'Date': '25/3/2016',
            'Genre': 'Animation'

        }];

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse
        };


        $scope.doDelete = function () {
            $scope.lastEntry = $scope.filmList.length - 1;
            $scope.filmList.splice($scope.lastEntry, 1);
        };
    };

    angular.module('filmStore').controller('FilmController', ['$scope', FilmController]);


}());