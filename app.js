var app = angular.module('spaExemplo', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl: 'paginas/home.html',
			controller: 'mainController'
		})

		.when('/sobre', {
			templateUrl: 'paginas/sobre.html',
			controller: 'sobreController'
		})

		.when('/contato', {
			templateUrl: 'paginas/contato.html',
			controller: 'contatoController'
		})
		.when('/tarefas', {
			templateUrl: 'paginas/tarefas.html',
			controller: 'tarefasController'
		});
});

app.controller('mainController', function ($scope) {

	$scope.message = 'Java Não Presta!!!';

});

app.controller('sobreController', function ($scope) {

	$scope.message = 'AngularJS é um framework JavaScript MV* para aplicações Web!!!';

});

app.controller('contatoController', function ($scope) {

	$scope.message = 'Entre em contato conosco em angular@js.com';

});

app.controller('tarefasController', function ($scope, TarefasService) {
	$scope.tarefas = TarefasService.getAll();

	$scope.addTarefa = function(){
		var novaTarefa = {
			descricao: $scope.formTarefaTexto,
			done:false
		};

		TarefasService.addTarefa(novaTarefa);

		$scope.formTarefaTexto = "";

	};

	$scope.apagarTarefa = function(tarefa){
		TarefasService.removeTarefa(tarefa);
	}

});

app.service('TarefasService', function () {
	var tarefas = [
		{
			descricao:'Aprender AngularJS',
			done:true
		},
		{
			descricao:'Comprar Cerveja',
			done: false
		}
	];

	return {
		getAll: function () {
			return tarefas;
		},
		getById: function (id) {
			return tarefas.find(function (element, index, array) {
				return element.id === id;
			})
		},
		addTarefa: function (tarefa) {
			tarefa.done = false;
			tarefas.push(tarefa);
		},
		doneTarefa: function (tarefa) {
			var t = tarefas.find(function (element, index, array) {
				return element.id === tarefa.id;
			});
			t.done = true;
		},
		removeTarefa: function (tarefa) {
			tarefas.splice(tarefa.id, 1);
		}
	}
})

