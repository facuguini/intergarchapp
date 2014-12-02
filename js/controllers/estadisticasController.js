app.controller('estadisticasController', ['$scope', '$timeout', function($scope, $timeout) {
	
	$scope.equipos = [];
	$("#itable").load(function(){
		$(this).contents().each($('.posiciones').children(".items").children().children(".col1").children(), function(i){
			var equipo = {
				nombre: $(this).text(),
				pj: "",
				dg: "",
				ptos: "" //html()
			}
			$scope.equipos[i] = equipo;
		})
		$(this).contents().each($('.posiciones').children(".items").children().children(".col2"), function(i){
			$scope.equipos[i].equipo.pj = $(this).text()
		})
		$(this).contents().each($('.posiciones').children(".items").children().children(".col8"), function(i){
			$scope.equipos[i].equipo.dg = $(this).text()
		})
		$(this).contents().each($('.posiciones').children(".items").children().children(".col10"), function(i){
			$scope.equipos[i].equipo.ptos = $(this).text()
		})
	})
/*	$.each($('.posiciones').children(".items").children().children(".col1").children(), function() { 
    	console.log($(this).text());
	});*/

	$(".ui-table-columntoggle-btn").hide();
	$scope.iframeshow = false;
}]);


