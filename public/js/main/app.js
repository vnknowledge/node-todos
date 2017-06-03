var app = angular.module('app.todos', ['xeditable']);

app.controller('todoController', ['$scope', 'svTodos', function ($scope, svTodos) {
    $scope.appName = 'Todo Dashboard';
    $scope.formData = [];
    $scope.loading = true;

    $scope.todos = [];

    svTodos.GET().success(function (data) {
        $scope.todos = data;
        $scope.loading = false;
    });

    $scope.createTodo = function() {
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            stage: false
        };

        svTodos.CREATE(todo).success(function (data) {
            $scope.todos = data;
            $scope.formData.text = '';
            $scope.loading = false;
        });
    };

    $scope.updateTodo = function(todo) {
        $scope.loading = true;
        svTodos.UPDATE(todo).success(function (data) {
            $scope.todos = data;
            $scope.loading = false; 
        });
    };

    $scope.deleteTodo = function(todo) {
        $scope.loading = true;
        svTodos.DELETE(todo._id).success(function (data) {
            $scope.todos = data;
            $scope.loading = false;
        });
    }
}]);