"use strict";angular.module("adminApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","chart.js"]).config(["$routeProvider",function(a){a.when("/equipe",{templateUrl:"views/equipe.html",controller:"EquipeCtrl"}).when("/clientes",{templateUrl:"views/clientes.html",controller:"ClientesCtrl"}).when("/produtos",{templateUrl:"views/produtos.html",controller:"ProdutosCtrl"}).when("/fornecedores",{templateUrl:"views/fornecedores.html",controller:"FornecedoresCtrl"}).when("/dashboard",{templateUrl:"views/dashboard.html",controller:"DashboardCtrl"}).when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/equipe/editar/:id",{templateUrl:"views/editarusuario.html",controller:"EditarusuarioCtrl"}).when("/fornecedores/editar/:id",{templateUrl:"views/editarfornecedor.html",controller:"EditarfornecedorCtrl"}).when("/produtos/editar/:id",{templateUrl:"views/editarproduto.html",controller:"EditarprodutoCtrl"}).when("/clientes/editar/:id",{templateUrl:"views/editarcliente.html",controller:"EditarclienteCtrl"}).otherwise({redirectTo:"/home"})}]),angular.module("adminApp").controller("HomeCtrl",["$scope","$rootScope",function(a,b){b.menuSelecionado="home";var c=function(a,b,c,d,e){return{codigo:a,count:b,caption:c,icone:d,url:e}};a.paineis=[],a.paineis.push(c(1,"2","Usuários","fa-users","equipe")),a.paineis.push(c(1,"80","Produtos","fa-archive","produtos")),a.paineis.push(c(1,"5","Fornecedores","fa-truck","fornecedores")),a.paineis.push(c(1,"30","Clientes","fa-credit-card","clientes")),a.optionsTotalizadores={scaleShowVerticalLines:!1},a.labelsTotalizadores=["Usuários","Produtos","Fornecedores","Clientes"],a.seriesTotalizadores=["Valor"],a.dataTotalizadores=[[20,80,50,30]],a.labelsVendas=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho"],a.seriesVendas=["Brahma","Skol","Coca-cola","Água mineral Santa Catarina"],a.dataVendas=[[65,59,80,81,56,55,40],[28,48,40,19,86,27,90],[93,67,23,98,10,38,49],[50,34,28,10,87,34,23]]}]),angular.module("adminApp").controller("EquipeCtrl",["$scope","$rootScope","$timeout","equipeFactory",function(a,b,c,d){b.menuSelecionado="equipe",a.tela="Equipe",a.urlback="home",a.icone="users",a.listEquipe=function(){d.list().success(function(b){a.equipe=b})},a.deleteEquipe=function(b){d.exclude(b,function(){a.listEquipe()})},c(function(){a.listEquipe()},100)}]),angular.module("adminApp").controller("ProdutosCtrl",["$scope","$rootScope","$timeout","produtosFactory",function(a,b,c,d){b.menuSelecionado="produtos",a.tela="Produtos",a.urlback="home",a.icone="archive",a.listProdutos=function(){d.list().success(function(b){a.produtos=b})},a.deleteProduto=function(b){d.exclude(b,function(){a.listProdutos()})},c(function(){a.listProdutos()},100)}]),angular.module("adminApp").controller("FornecedoresCtrl",["$scope","$rootScope",function(a,b){b.menuSelecionado="fornecedores",a.tela="Fornecedores",a.urlback="home",a.icone="truck";var c=function(a,b,c,d,e){return{codigo:a,nome:b,cnpj:c,representante:d,endereco:e}},d=function(a,b,c,d){return{codigo:a,nome:b,email:c,telefone:d}};a.fornecedores=[],a.fornecedores.push(c(1,"Fornecedor 1","212121121/21212",d(1,"Alexsandro PFleger","alex@fornecedor1.com","9888-8799"),"São Pedro de Alcântara")),a.fornecedores.push(c(1,"Fornecedor 2","343243434/34343",d(2,"Marilda Valéria Rios de Souza","mara@fornecedor2.com","9888-8799"),"São Pedro de Alcântara")),a.fornecedores.push(c(1,"Fornecedor 3","867564434/44232",d(3,"José Nazareno de Souza","josé@fornecedor3.com","9888-8799"),"São Pedro de Alcântara"))}]),angular.module("adminApp").controller("ClientesCtrl",["$scope","$rootScope",function(a,b){b.menuSelecionado="clientes",a.tela="Clientes",a.urlback="home",a.icone="credit-card";var c=function(a,b,c,d,e){return{codigo:a,email:c,nome:b,telefone:d,endereco:e}};a.clientes=[],a.clientes.push(c(1,"Zé da esquina","zeesquina@gmail.com","8880-2222","Rua luiz fagundes, 2367")),a.clientes.push(c(2,"Maria do Carmo","mariacarmo@gmail.com","3232-2323","Avenida Barão do Rio Branco")),a.clientes.push(c(3,"Padaria vó Maria","padocamaria@gmail.com","1212-1212","Rua Vereador Arthur Mariano")),a.clientes.push(c(4,"Bruce wayne","brucebat@wayne.com","9998-9888","Av. Gotham"))}]),angular.module("adminApp").controller("DashboardCtrl",["$scope","$rootScope",function(a,b){b.menuSelecionado="dashboard",a.tela="Dashboard",a.urlback="home",a.icone="bar-chart-o",a.optionsTotalizadores={scaleShowVerticalLines:!1},a.labelsTotalizadores=["Usuários","Produtos","Fornecedores","Clientes"],a.seriesTotalizadores=["Valor"],a.dataTotalizadores=[[20,80,50,30]],a.labelsVendas=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho"],a.seriesVendas=["Brahma","Skol","Coca-cola","Água mineral Santa Catarina"],a.dataVendas=[[65,59,80,81,56,55,40],[28,48,40,19,86,27,90],[93,67,23,98,10,38,49],[50,34,28,10,87,34,23]]}]),angular.module("adminApp").controller("EditarusuarioCtrl",["$scope","$rootScope","$routeParams","equipeFactory","cargoFactory",function(a,b,c,d,e){b.menuSelecionado="equipe",a.tela="Editar usuário",a.urlback="equipe",a.save=function(){d.save(a.usuario,function(){})},a.getUsuario=function(){d.get(c.id).success(function(b){a.usuario=b})},a.listCargo=function(){e.list().success(function(b){a.cargos=b})},a.listCargo(),a.getUsuario()}]),angular.module("adminApp").controller("EditarfornecedorCtrl",["$scope","$rootScope","$routeParams",function(a,b,c){b.menuSelecionado="fornecedores",a.tela="Fornecedores",a.urlback="fornecedores";var d=function(a,b,c,d,e){return{codigo:a,nome:b,cnpj:c,representante:d,endereco:e}},e=function(a,b,c,d){return{codigo:a,nome:b,email:c,telefone:d}};a.fornecedores=[],a.fornecedores.push(d(1,"Fornecedor 1","212121121/21212",e(1,"Alexsandro PFleger","alex@fornecedor1.com","9888-8799"),"São Pedro de Alcântara")),a.fornecedores.push(d(1,"Fornecedor 2","343243434/34343",e(2,"Marilda Valéria Rios de Souza","mara@fornecedor2.com","9888-8799"),"São Pedro de Alcântara")),a.fornecedores.push(d(1,"Fornecedor 3","867564434/44232",e(3,"José Nazareno de Souza","josé@fornecedor3.com","9888-8799"),"São Pedro de Alcântara")),angular.forEach(a.fornecedores,function(b){return b.codigo==c.id?void(a.fornecedor=b):void 0})}]),angular.module("adminApp").controller("EditarprodutoCtrl",["$scope","$rootScope","$routeParams","produtosFactory","unidadeProdutoFactory","tipoProdutoFactory",function(a,b,c,d,e,f){b.menuSelecionado="produtos",a.tela="Editar produto",a.urlback="produtos",a.save=function(){d.save(a.produto,function(){})},a.getProduto=function(){d.get(c.id).success(function(b){a.produto=b})},a.listTipoProduto=function(){f.list().success(function(b){a.tiposProduto=b})},a.listUnidades=function(){e.list().success(function(b){a.unidades=b})},a.listUnidades(),a.listTipoProduto(),a.getProduto()}]),angular.module("adminApp").controller("EditarclienteCtrl",["$scope","$rootScope","$routeParams",function(a,b,c){b.menuSelecionado="clientes",a.tela="Editar clientes",a.urlback="clientes";var d=function(a,b,c,d,e){return{codigo:a,email:c,nome:b,telefone:d,endereco:e}};a.clientes=[],a.clientes.push(d(1,"Zé da esquina","zeesquina@gmail.com","8880-2222","Rua luiz fagundes, 2367")),a.clientes.push(d(2,"Maria do Carmo","mariacarmo@gmail.com","3232-2323","Avenida Barão do Rio Branco")),a.clientes.push(d(3,"Padaria vó Maria","padocamaria@gmail.com","1212-1212","Rua Vereador Arthur Mariano")),a.clientes.push(d(4,"Bruce wayne","brucebat@wayne.com","9998-9888","Av. Gotham")),angular.forEach(a.clientes,function(b){return b.codigo==c.id?void(a.cliente=b):void 0})}]),angular.module("adminApp").factory("equipeFactory",["$http",function(a){function b(){return a.get("http://localhost:8080/equipe/list")}function c(b){return a.get("http://localhost:8080/equipe/"+b)}function d(b,c){var d={method:"POST",url:"http://localhost:8080/equipe/save",headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/json"},data:b};a(d).success(function(a){c&&c(a)}).error(function(){console.log("error")})}function e(b,c){var d={method:"DELETE",url:"http://localhost:8080/equipe/delete/"+b};a(d).success(function(a){c&&c(a)}).error(function(){console.log("error")})}return{list:b,get:c,save:d,exclude:e}}]),angular.module("adminApp").factory("cargoFactory",["$http",function(a){function b(){return a.get("http://localhost:8080/cargo/list")}return{list:b}}]),angular.module("adminApp").factory("unidadeProdutoFactory",["$http",function(a){function b(){return a.get("http://localhost:8080/unidadeproduto/list")}return{list:b}}]),angular.module("adminApp").factory("produtosFactory",["$http",function(a){function b(){return a.get("http://localhost:8080/produtos/list")}function c(b){return a.get("http://localhost:8080/produtos/"+b)}function d(b,c){var d={method:"POST",url:"http://localhost:8080/produtos/save",headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/json"},data:b};console.log("aqui"),a(d).success(function(a){console.log("aqui"),c&&c(a)}).error(function(){console.log("error")})}function e(b,c){var d={method:"DELETE",url:"http://localhost:8080/produtos/delete/"+b};a(d).success(function(a){c&&c(a)}).error(function(){console.log("error")})}return{list:b,get:c,save:d,exclude:e}}]),angular.module("adminApp").factory("tipoProdutoFactory",["$http",function(a){function b(){return a.get("http://localhost:8080/tipoproduto/list")}return{list:b}}]);