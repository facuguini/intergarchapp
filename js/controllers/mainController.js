app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.pageChanger = function(page) {
		localStorage.setItem("home", page);
		switch (page) {
			case "estadisticas":
				$scope.estshow = true;
				$scope.proxshow = false;
				$scope.jugshow = false;
			break;
			case "proxima":
				$scope.estshow = false;
				$scope.proxshow = true;
				$scope.jugshow = false;
			break;
			case "jugadores":
				$scope.estshow = false;
				$scope.proxshow = false;
				$scope.jugshow = true;
			break;
		}
	}

	$scope.cantJugadores = 0;	
	$scope.pageChanger(localStorage.getItem("home"))
}]);
