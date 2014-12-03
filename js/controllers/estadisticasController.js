app.controller('estadisticasController', ['$scope', '$timeout', '$q', function($scope, $timeout, $q) {
	$scope.equipos = [];
	
	function loadIframe() {
		try {
	    	return $q(function() {
	    		$("#itable").load(function(){
					$.each($(this).contents().find('.posiciones').children(".items").children().children(".col1").children(), function(i){
						var equipo = {
							nombre: $(this).text(),
							pj: "",
							dg: "",
							ptos: "" //html()
						}
						$scope.equipos[i] = equipo;
					})
					$.each($(this).contents().find('.posiciones').children(".items").children().children(".col2"), function(i){
						$scope.equipos[i].pj = $(this).html()
					})
					$.each($(this).contents().find('.posiciones').children(".items").children().children(".col8"), function(i){
						$scope.equipos[i].dg = $(this).html()
					})
					$.each($(this).contents().find('.posiciones').children(".items").children().children(".col10"), function(i){
						$scope.equipos[i].ptos = $(this).html()
					})
				})
			})
		} catch(err) {
    		console.log("Error: " + err)
		}		
	}	

	var promise = loadIframe()
	promise.then(function(){
    	localStorage.setItem("estadistica", JSON.stringify($scope.equipos))
	}, function() {
    	$scope.$parent.ErrorDeConexion = "Error de Conexion, no actualizado."
    	$scope.equipos = JSON.parse(localStorage.getItem("estadistica"))
	})
	$(".ui-table-columntoggle-btn").hide();
	$scope.iframeshow = false;
}]);


