'use strict';

(function() {

class LoginController {
  //var vm = this;
  //vm.name = "sathya";
  constructor($http, $scope, socket) {
    this.$http = $http;
    
  }

  submitForm(form){
    form.$submitted = true;
    if (form.$invalid) {
          toastr.error('validation errors, cancelling the submit');
          //form.email.$error.required = true;
          // toastr.success('validation success');
          // toastr.info('info passing');
          // toastr.warning('warning message');
          return;
                
        } 
  	var emailid = form.email.$viewValue;
  	var pwd = form.pwd.$viewValue;
  	
  	//this.$http.post('/api/users', { email: emailid,password:pwd });
  }
}

angular.module('freecircuitApp')
  .controller('LoginController', LoginController);

})();
