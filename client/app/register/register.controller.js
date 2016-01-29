// 'use strict';

// (function() {

// class RegController {

//   constructor($http, $scope, socket,$state) {
//     this.$http = $http;
//     this.awesomeThings = [];
//     this.$state = $state;

//     // $http.get('/api/users').then(response => {
//     //   this.awesomeThings = response.data;
//     //   socket.syncUpdates('thing', this.awesomeThings);
//     // });

//     $scope.$on('$destroy', function() {
//       socket.unsyncUpdates('user');
//     });
//   }
//   submitForm(form){
//     form.$submitted = true;
//     if (form.$invalid) {
//           toastr.error('validation errors, cancelling the submit');
//           // toastr.success('validation success');
//           // toastr.info('info passing');
//           // toastr.warning('warning message');
//           return;
                
//         } 
//     var emailid = form.email.$viewValue;
//     var pwd = form.password.$viewValue;
//     var cpwd = form.cpwd.$viewValue;
//     //console.log(email);
//     //alert("Submitted");
//     this.$http.post('/api/users', { email: emailid,password:pwd }).then(function(string) {
//       this.$state.go("login");
//     });
//   }
// }

// angular.module('freecircuitApp')
//   .controller('RegController', RegController);

// })();


(function () {
    'use strict';

    angular
        .module('freecircuitApp')
        .controller('RegController', RegController);

    RegController.$inject = ['$http','$scope','socket','$state'];
    /* @ngInject */
    function RegController($http, $scope, socket,$state) {
        var vm = this;
        vm.title = 'Add New Task';

        // activate();
        // //vm.currentTime = vm.getTime();
        // function activate() {
        //     logger.info('Activated New Task View');
        // }

        vm.submitForm = function (form){
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
        var dateofbirth = form.dateB.$viewValue;
        //console.log(email);
        //alert("Submitted");
        $http.post('/api/users', { email: emailid,password:pwd,dob:dateofbirth }).then(function(string) {
        $state.go("login");
        });
      }
        
    }
})();