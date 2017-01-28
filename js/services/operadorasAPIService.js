angular.module("listaTelefonica").factory("operadorasAPI", function( $http, config){

	var _getOperadoras = function(){
		return $http.get(config.baseUrl + "/operadoras");
	}

	var _saveOperadora = function(){
		return $http.get(config.baseUrl + "/operadoras");
	}

	return {
		getOperadoras : _getOperadoras,
		saveOperadora : _saveOperadora
	}

});