app.controller('mainController', ['$scope', '$timeout', '$interval', function($scope, $timeout, $interval) {


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
	if(isNullOrWhiteSpace(localStorage.getItem("autorefresh"))) {
		$scope.autorefresh = 10
		localStorage.setItem("autorefresh", 10)
	} else {
		$scope.autorefresh = parseInt(localStorage.getItem("autorefresh"))
	}
	if ($scope.autorefresh != 0) {
		var autorefresh = $interval(function(){$scope.refresh(); console.log($scope.autorefresh)}, $scope.autorefresh*1000)	
	} else {
		var autorefresh
	}
	$scope.setAutorefresh = function() {
		if($scope.autorefresh > 0){ 
			$interval.cancel(autorefresh)
			autorefresh = $interval(function(){$scope.refresh();}, $scope.autorefresh*1000)
			localStorage.setItem("autorefresh", $scope.autorefresh)
		} else if ($scope.autorefresh == 0) {
			$interval.cancel(autorefresh)
			localStorage.setItem("autorefresh", $scope.autorefresh)
		} else {
			$scope.autorefresh = 0
		}
	}

	$scope.cantJugadores = 0;	
	$scope.pageChanger(localStorage.getItem("home"))

	function isNullOrWhiteSpace( input ) {
	    if (input == null) return true;
	    return input.replace(/\s/g, '').length < 1;
	}
}]);
