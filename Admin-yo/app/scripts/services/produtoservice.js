angular.module('adminApp').factory('produtosFactory', function($http) {

    function list(callback) {
        return $http.get('http://localhost:8080/produtos/list');
    }

    function get(codigo, callback) {
        return $http.get('http://localhost:8080/produtos/' + codigo);
    }

    function save(produto, callback) {
         var req = {
         method: 'POST',
         url: 'http://localhost:8080/produtos/save',
         headers: {
           'Content-Type': 'application/json;charset=UTF-8',
           'Accept' : 'application/json'
         },
         data: produto,
        }
        console.log('aqui');
        $http(req).success(function(data){
            console.log('aqui');
            if (callback){ callback(data); }
        }).error(function(){
            console.log('error');
        });
    }

    function exclude(codigo, callback) {
        var req = {
         method: 'DELETE',
         url: 'http://localhost:8080/produtos/delete/' + codigo
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