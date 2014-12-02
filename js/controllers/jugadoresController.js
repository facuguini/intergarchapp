app.controller('jugadoresController', ['$scope', '$http','$timeout', function($scope, $http, $timeout) {
	$scope.jugadores = []
	$scope.error = ""

	var get = function(){
		$http.get("http://itshare.ddns.net:9290/getjugadores").
		success(function(data, status){
			$scope.jugadores = data
			//$scope.error = status
			localStorage.setItem("listajugadores", JSON.stringify($scope.jugadores))
			contador()
		}).
		error(function(status){
			$scope.jugadores = JSON.parse(localStorage.getItem("listajugadores"))
			$scope.$parent.ErrorDeConexion = "Error de Conexion, no actualizado."
		})
	}
	get()
	$scope.check = function(id, check) {
		console.log("http://itshare.ddns.net:9290/check/"+id+"/"+!check)
		$http.post("http://itshare.ddns.net:9290/check/"+id+"/"+!check, "").
		success(function(data, status){
			console.log(data+" , "+status)
			get()
		}).
		error(function() {
			console.log(2)
		});
	}

	$scope.$parent.refresh = function() {
		get()
	}

	function contador() {
		$scope.$parent.cantJugadores = 0
		for(i in $scope.jugadores) {
			if($scope.jugadores[i].Checked == true) {
				$scope.$parent.cantJugadores++;
			}
		}
	}
}]);
