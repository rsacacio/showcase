angular.module('adminApp').factory('fornecedorFactory', function($http) {

    function list(callback) {
        return $http.get('http://localhost:8080/fornecedores/list');
    }

    function get(codigo, callback) {
        return $http.get('http://localhost:8080/fornecedores/' + codigo);
    }

    function save(fornecedor, callback) {
         var req = {
         method: 'POST',
         url: 'http://localhost:8080/fornecedores/save',
         headers: {
           'Content-Type': 'application/json;charset=UTF-8',
           'Accept' : 'application/json'
         },
         data: fornecedor,
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
         url: 'http://localhost:8080/fornecedores/delete/' + codigo
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