(function () {
    'use strict';

    angular
        .module('freecircuitApp')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q'];
    /* @ngInject */
    function dataservice($http, $q) {
        var service = {
            
            submit:submit,
            
        };
        var baseURL = "http://localhost:9000"
        return service;

        
        function submit(app){
                //app = JSON.stringify(app);
                //console.log(app.taskTitle);
                // var params = {
                //     taskTitle : app.taskTitle,
                //     taskDesc:app.taskDesc
                // };
                // return $http.post(config.baseURL+"/tasks/",{
                //     taskTitle : app.taskTitle,
                //     projectName:app.projectName,
                //     taskDesc:app.taskDesc,
                //     taskHrs:app.taskHrs,
                //     createdTime:app.createdTime,
                //     taskStatus:app.taskStatus
                // })
                return $http.post(baseURL+"/api/users/",{
                    email : app.email,
                    password:app.password,
                    dob:app.dob
                })
                .then(success)
                .catch(fail);

                function success(response) {
                    return response.data;
                }

                function fail(error) {
                    var msg = 'query for tasks failed. ' + error.data;
                    toastr.error(msg);
                    return $q.reject(msg);
                }

            }

            

        
    }
})();