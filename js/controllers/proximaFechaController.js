app.controller('proximaFechaController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.zo = false
	$scope.zt = false
	$scope.$parent.nZoom = "100%"

	$scope.zoom = function() {
		if ($scope.zo == false && $scope.zt == false) {
			$scope.zo = true
			$scope.zt = false
			$scope.$parent.nZoom = "150%"
		} else if ($scope.zo == true && $scope.zt == false) {
			$scope.zo = false
			$scope.zt = true
			$scope.$parent.nZoom = "200%"
		} else  if ($scope.zo == false && $scope.zt == true) {
			$scope.zo = false
			$scope.zt = false			
			$scope.$parent.nZoom = "100%"
		}
	}
}]);
