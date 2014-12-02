app.controller('estadisticasController', ['$scope', '$timeout', function($scope, $timeout) {
	
	$scope.equipos = [];
	$("#itable").load(function(){
		$(this).contents().find('.col1').each(function(i){
			var equipo = {
				nombre: $(this).text,
				pj: $(this).closest(".col2").text,
				dg:$(this).closest(".col8").text,
				ptos:$(this).closest(".col10").text //html()
			}
			equipos[i] = equipo;
		})
	})
	$(".ui-table-columntoggle-btn").hide();
	$scope.iframeshow = false;
}]);


