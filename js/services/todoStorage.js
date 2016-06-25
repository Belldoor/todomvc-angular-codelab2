/**
 * Created by belldoor on 2016. 6. 25..
 */
// <!-- Service -->
// data를 관리하는 역할

angular.module('todomvc')
    .factory('todoStorage', function () {
        var storage = {
            destroyCompleted: function () {
                var incompletedTodos = storage.todos.filter(function (t) {
                    if (!t.completed) return t;
                });

                angular.copy(incompletedTodos, storage.todos);
            },
            destroy: function (todo) {
                // find index of todo
                var findIdx = storage.todos.findIndex(function (t) {
                    return t.id === todo.id;
                });

                // remove
                // -1 : there is no index in this array
                if (findIdx > -1) {
                    // remove this element in array.
                    storage.todos.splice(findIdx, 1);
                }
            },
            post: function (newTodoTitle) {
                var todos = storage.todos;
                var newTodoId = todos.length > 0 ?
                todos[todos.length - 1].id + 1 : 1;

                var newTodo = {
                    id: newTodoId,
                    title: newTodoTitle,
                    completed: false
                };

                storage.todos.push(newTodo);
            },
            get: function () {
                return storage.todos;
            },

            todos: [
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
            ]
        };
        return storage;
    });