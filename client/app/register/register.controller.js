'use strict';

(function() {

class RegController {

  submitForm(form){
    form.$submitted = true;
    if (form.$invalid) {
          toastr.error('validation errors, cancelling the submit');
          // toastr.success('validation success');
          // toastr.info('info passing');
          // toastr.warning('warning message');
          return;
                
        } 
    var emailid = form.email.$viewValue;
    var pwd = form.password.$viewValue;
    var cpwd = form.cpwd.$viewValue;
    //console.log(email);
    //alert("Submitted");
    //this.$http.post('/api/users', { email: emailid,password:pwd });
  }
}

angular.module('freecircuitApp')
  .controller('RegController', RegController);

})();
