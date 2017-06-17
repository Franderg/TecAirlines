var app = angular.module('putserviceApp', []);

app.controller('putserviceCtrl', function ($scope, $http) {

	$scope.fechInicio = null;
	$scope.fechFin = null;
	$scope.descripcion = null;
	$scope.imageUrl = null;
	$scope.imgDefault = "img/400x300.png";
	$scope.lblMsg = null;

	$scope.comparar = function (){
		if ($scope.imageUrl.localeCompare("") == 0) {
			return "img/400x300.png";
		} else {
			return $scope.imageUrl;
		};
	};

	$scope.putdata = function (fechInicio, fechFin, descripcion, imageUrl) {

		var data = {
			Start:       fechInicio,
			End:         fechFin,
			Description: descripcion,
			ImageUrl:    imageUrl
		};

//Call the services
	$http.post('https://tecairlinesapi.azurewebsites.net/api/Advertising', JSON.stringify(data)).then(function (response) {
	if (response.data)
	$scope.msg = "Put Data Method Executed Successfully!";
	}, function (response) {
		$scope.msg = "Service not Exists";
		$scope.statusval = response.status;
		$scope.statustext = response.statusText;
		$scope.headers = response.headers();
	});
	};
});
