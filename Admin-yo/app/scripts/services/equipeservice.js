angular.module('adminApp').factory('equipeFactory', function($http) {

    function list(callback) {
        return $http.get('http://localhost:8080/equipe/list');
    }

    function get(codigo, callback) {
        return $http.get('http://localhost:8080/equipe/' + codigo);
    }

    function save(funcionario, callback) {
         var req = {
         method: 'POST',
         url: 'http://localhost:8080/equipe/save',
         headers: {
           'Content-Type': 'application/json;charset=UTF-8',
           'Accept' : 'application/json'
         },
         data: funcionario,
        }

        $http(req).success(function(data){
            if (callback){ callback(data); }
        }).error(function(){
            console.log('error');
        });
    }

    function exclude(codigo, callback) {
        var req = {
         method: 'DELETE',
         url: 'http://localhost:8080/equipe/delete/' + codigo
        }

        $http(req).success(function(data){
            if (callback){ callback(data); }
        }).error(function(){
            console.log('error');
        });
    }

    return {
        list:list,
        get:get,
        save:save,
        exclude:exclude
    };
});