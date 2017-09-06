(function() {

    var FilmController =  function($scope)
    {
        $scope.sortby = 'Title';
        $scope.reverse =false;

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
        }];

        $scope.doSort = function(propName)
        {
            $scope.sortBy= propName;
            $scope.reverse= !$scope.reverse
        };
    };
    angular.module('filmStore').controller('FilmController', ['$scope', FilmController]);
}());