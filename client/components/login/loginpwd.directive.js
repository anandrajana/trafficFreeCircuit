'use strict';

angular.module('freecircuitApp')
  .directive('passwordChk', function () {
    return {
       require: '?ngModel',
      restrict: 'A',
      link: function(scope, element,attrs,ctrl) {
        ctrl.$parsers.push(function(input) {
                        if(input.length<8){
                        	console.log("ok");

                        }
                        else
                        	return false;
                    });
      }
    };
  });
