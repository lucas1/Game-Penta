angular.module('GamePentaApp', []).controller('GamePentaController', ['$scope','$http',function($scope, $http){ 
    $scope.changeLanguage = function(lang){
        var file = null;
        
        switch(lang){
            case 'en':
                file = 'english';
                break;
            case 'pt':
                file = 'portugues';
                break;             
            default:
                file = 'english'; 
        }       
    };
}]);