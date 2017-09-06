(function() {
    angular.module('bookStore').service('doSort', [doSort]);


    vm.doSort = function()
{
    vm.sortby = 'Title';
    vm.reverse= !vm.reverse
};
}());