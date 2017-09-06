(function() {

    var BookController =  function(service)
    {
        var vm = this;


        vm.reverse =false;

        vm.books = [{
            'Author': 'James Herbert',
            'Title': 'Rats',
            'Genre': 'Horror',
            'Published': '1988'

        }, {
            'Author': 'J K Rowling',
            'Title': 'Harry Potter',
            'Genre': 'Fantasy',
            'Published': '1998'
        }, {
            'Author': 'Stephen King',
            'Title': 'Carrie',
            'Genre': 'Horror',
            'Published': '1984'
        }];

      vm.service.doSort();
    };
    angular.module('bookStore').controller('BookController','service', [service.doSort, BookController]);
}());