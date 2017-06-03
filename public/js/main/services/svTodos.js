var app = angular.module('app.todos');

app.factory('svTodos', ['$http', function($http) {
    return {
        GET: function() {
            return $http.get('/api/todos');
        },

        CREATE: function(todoData) {
            return $http.post('/api/todo', todoData);
        },

        UPDATE: function(todoData) {
            return $http.put('/api/todo', todoData);
        },

        DELETE: function(id) {
            return $http.delete('/api/todo/'+ id);
        }
    }
}]);