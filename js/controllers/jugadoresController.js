app.controller('jugadoresController', ['$scope', '$http','$timeout', function($scope, $http, $timeout) {
	$scope.jugadores = []
	$scope.nombreNuevo = ""

	var get = function(){
		$http.get("http://itshare.ddns.net:9290/getjugadores").
		success(function(data, status){
			$scope.jugadores = data
			localStorage.setItem("listajugadores", JSON.stringify($scope.jugadores))
			contador()
			$scope.$parent.ErrorDeConexion = null
		}).
		error(function(status){
			$scope.jugadores = JSON.parse(localStorage.getItem("listajugadores"))
			$scope.$parent.ErrorDeConexion = "Error de Conexion, no actualizado."
			console.log("Error al traer los jugadores: "+data+". Error codigo: "+status)
		})
	}
	get()
	$scope.check = function(id, check) {
		console.log("http://itshare.ddns.net:9290/check/"+id+"/"+!check)
		$http.post("http://itshare.ddns.net:9290/check/"+id+"/"+!check, "").
		success(function(){
			get()
		}).
		error(function(data, status) {
			console.log("Error al chequear: "+data+". Error codigo: "+status)
		});
	}

	$scope.delete = function(id) {
		$http.delete("http://itshare.ddns.net:9290/user/"+id).
		success(function(data, status){
			console.log("Data: "+data + ". Coidgo: "+status)
			get()
		}).
		error(function(data, status) {
			console.log("Error al eliminar: "+data+". Error codigo: "+status)
		})
	}

	$scope.nuevo = function() {
		if(!isNullOrWhiteSpace($scope.nombreNuevo) && ($scope.nombreNuevo.length<30) && ($scope.nombreNuevo.length>2)) {
			$http.post("http://itshare.ddns.net:9290/user/"+$scope.nombreNuevo, "POST").
			success(function(){
				get()
			}).
			error(function(data, status) {
				console.log("Error al crear: "+data+". Error codigo: "+status)
			})
			$scope.nombreNuevo = ""
		} else {
			alert("nop!")
		}
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

	function isNullOrWhiteSpace( input ) {
	    if (input == null) return true;
	    return input.replace(/\s/g, '').length < 1;
	}
}]);
