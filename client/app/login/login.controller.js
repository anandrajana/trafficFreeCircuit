'use strict';

(function() {

class LoginController {
  //var vm = this;
  //vm.name = "sathya";
  constructor($http, $scope, socket) {
    this.$http = $http;
    // this.awesomeThings = [];

    // $http.get('/api/users').then(response => {
    //   this.users = response.data;
    //   socket.syncUpdates('thing', this.awesomeThings);
    // });

    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('thing');
    // });
  }

  submitForm(user){
  	var emailid = user.email.$viewValue;
  	var pwd = user.pwd.$viewValue;
  	//console.log(email);
  	//alert("Submitted");
  	this.$http.post('/api/users', { email: emailid,password:pwd });
  }
}

angular.module('freecircuitApp')
  .controller('LoginController', LoginController);

})();
