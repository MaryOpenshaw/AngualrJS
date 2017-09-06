(function() {

    var OtherController;
    OtherController = function () {
        var vm = this;
        vm.reverse =false;
        vm.authors = [{
            'author':'James Herbert'
        }, {
            'author':'J K Rowling'
        }, {
            'author': 'Stephen King'
        }]

    };

    angular.module('bookStore').controller('OtherController', [OtherController]);
}());