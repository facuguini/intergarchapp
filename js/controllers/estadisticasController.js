app.controller('estadisticasController', ['$scope', '$timeout', function($scope, $timeout) {
	var iframe = $("#iframe");
	iframe.load(function(){
		iframe.contents().find(".bottom-line, #tab-tabla-1692, #tab-fairplay, #tab-vallamenosvencida, #tabla-posiciones-1692 .col3, .col4, .col5, .col6, .col7, .col9, .col-fp, .instructions").hide();
		iframe.contents().find('.titles').css("background-color", "#000069");
		iframe.contents().find('.titles').css("width", "100%");
		iframe.contents().find('.col1').css("width", "40%");		
		iframe.contents().find('.col2, .col8, .col10').css("width", "20%");
		iframe.contents().find(".col").closest("a").remove();
	})
	$(".ui-table-columntoggle-btn").hide();
	$scope.iframeshow = true;
}]);


