var app = angular.module('spaExemplo',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl : 'paginas/home.html',
		controller : 'mainController'
	})

	.when('/sobre', {
		templateUrl : 'paginas/sobre.html',
		controller : 'sobreController'
	})

	.when('/contato', {
		templateUrl : 'paginas/contato.html',
		controller : 'contatoController'
	});
});

app.controller('mainController', function($scope){

	$scope.message = 'Hello World!!!';

});

app.controller('sobreController', function($scope){

	$scope.message = 'AngularJS é um framework JavaScript MV* para aplicações Web!!!';

});

app.controller('contatoController', function($scope){

	$scope.message = 'Entre em contato conosco em angular@js.com';

});

