app.controller('estadisticasController', ['$scope', '$timeout', function($scope, $timeout) {
	
	$scope.equipos = [];

	try {
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
    	localStorage.setItem("estadistica", $scope.equipos)
	} catch(err) {
    	$scope.$parent.ErrorDeConexion = "Error de Conexion, no actualizado."
    	console.log("Error: " + err)
    	$scope.equipos = localStorage.getItem("estadistica")
	}

	$(".ui-table-columntoggle-btn").hide();
	$scope.iframeshow = false;
}]);


