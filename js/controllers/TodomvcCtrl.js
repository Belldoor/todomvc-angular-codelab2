/**
 * Created by belldoor on 2016. 6. 25..
 */
<!-- 컨트롤러 -->
angular.module('todomvc')
    // 두번째 파라미터로 storage 가져옴
    .controller('TodomvcCtrl', function ($scope, todoStorage) {

        $scope.clearCompleted = function () {
            var c = confirm("Are you sure clear?");
            if (c) todoStorage.destroyCompleted();
        };

        $scope.add = function (newTodoTitle) {
            newTodoTitle = newTodoTitle.trim();
            if (newTodoTitle === '') return;

            todoStorage.post(newTodoTitle);
            $scope.newTodoTitle = '';
        };
        
        $scope.remove = function (todo) {
            var c = confirm("Are you sure remove?");
            if (c) todoStorage.destroy(todo);
        };

        /* data handling은 service에서 */
        $scope.todos = todoStorage.get();

    });