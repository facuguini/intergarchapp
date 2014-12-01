app.controller('jugadoresController', ['$scope', '$http','$timeout', function($scope, $http, $timeout) {
	$scope.jugadores = []
	$scope.error = ""
	$http.get("http://itshare.ddns.net:9290/getjugadores").
	success(function(data, status){
		$scope.jugadores = data
		$scope.error = status
		contador()
	}).
	error(function(status){
		$scope.error = status
	})

	function contador() {
		for(i in $scope.jugadores) {
			if($scope.jugadores[i].Checked == true) {
				$scope.$parent.cantJugadores++;
			}
		}
	}
}]);
