angular.module("helpFeed")
<<<<<<< HEAD
.controller("helpFeedCtrl", function ($scope,$log,$location, $routeParams, $rootScope, $route, helpFeedSvc) {
  $scope.currentUser = currentUser;
  $scope.helps = [];
  helpFeedSvc.getHelps().then(function (helps) {
    $scope.helps = helps.data;
  });
=======
    .controller("helpFeedCtrl", function ($scope,$log,$location, $routeParams, $rootScope, $route, helpFeedSvc) {
      $scope.currentUser = currentUser;
      console.log($scope.currentUser);
      $scope.helps = [];
      helpFeedSvc.getHelps().then(function (helps) {
        $scope.helps = helps.data;
      });
>>>>>>> e38943d23e19469b11ec7f94f2a110122b2aa6ba

  helpFeedSvc.getHelp($scope.currentUser.id).then(function (response) {
    $scope.singleHelp = response.data;
  });


<<<<<<< HEAD
  $scope.addHelp = function (helpObj) {
    var newHelp = {
      date:new Date(),
      problem:helpObj.problem,
      landmark:helpObj.landmark,
      comments: []
    };
    helpFeedSvc.addHelp(newHelp)
    $scope.helps.push(newHelp);
    $log.info(newHelp);
    $scope.newHelp = {};
  };
=======
      $scope.addHelp = function (helpObj) {
        var newHelp = {
          date:new Date(),
          problem:helpObj.problem,
          landmark:helpObj.landmark,
          comments: []
        };
          helpFeedSvc.addHelp(newHelp,$scope.currentUser.id)
          $scope.helps.push(newHelp);
          $log.info(newHelp);
          $scope.newHelp = {};
        };
>>>>>>> e38943d23e19469b11ec7f94f2a110122b2aa6ba

});
