app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.pageChanger = function(page) {
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

}]);
