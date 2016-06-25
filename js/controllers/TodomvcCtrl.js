/**
 * Created by belldoor on 2016. 6. 25..
 */
<!-- 컨트롤러 -->
angular.module('todomvc')
    .controller('TodomvcCtrl', function ($scope) {

        $scope.clearCompleted = function () {
            var incompletedTodos = $scope.todos.filter(function (t) {
               if (!t.completed) return t;
            });

            angular.copy(incompletedTodos, $scope.todos);
        };

        $scope.add = function (newTodoTitle) {
            var todos = $scope.todos;
            var newTodoId = todos.length > 0 ?
                todos[todos.length - 1].id + 1 : 1;

            var newTodo = {
                id: newTodoId,
                title: newTodoTitle,
                completed: false
            };

            $scope.todos.push(newTodo);
            $scope.newTodoTitle = '';
        };
        
        $scope.remove = function (todo) {
            // find index of todo
            var findIdx = $scope.todos.findIndex(function (t) {
               return t.id === todo.id;
            });

            // remove
            // -1 : there is no index in this array
            if (findIdx > -1) {
                // remove this element in array.
                $scope.todos.splice(findIdx, 1);
            }
        };

        $scope.todos = [
            {
                id: 1,
                title: 'Attending Codelab',
                completed: true
            },
            {
                id: 2,
                title: 'Buy a React.js book',
                completed: false
            },
            {
                id: 3,
                title: 'Go to GYM',
                completed: true
            },
            {
                id: 4,
                title: 'Study Angular.js',
                completed: false
            },
            {
                id: 5,
                title: 'Meeting with my friends',
                completed: false
            },
            {
                id: 6,
                title: 'Watching movie - Tajan',
                completed: true
            }
        ];

    });