(function(angular) {
  'use strict';

  /**
   *
   * @param $scope
   * @param $state
   */
  angular.module('application')
    .controller('IntroController', function($rootScope, $scope, $state, $ionicSlideBoxDelegate, $ionicPlatform, $location, $ionicHistory) {


      /*-------------------------------------------------------------------
       * 		 				 	ATTRIBUTES
       *-------------------------------------------------------------------*/


      /*-------------------------------------------------------------------
       * 		 				  	POST CONSTRUCT
       *-------------------------------------------------------------------*/
      //Quando acessa a intro sobrescreve o Handler de BACK
      $ionicPlatform.registerBackButtonAction(function(e){
        if ($state.$current.name == 'authentication.intro'){
          $scope.previous();
        } else if ($state.$current.name == 'map.index') {
          ionic.Platform.exitApp();
        } else {
          $ionicHistory.goBack();
        }
      }, 100);

      /*-------------------------------------------------------------------
       * 		 				 	  HANDLERS
       *-------------------------------------------------------------------*/

      // Called to navigate to the main app
      $scope.startApp = function() {
        $state.go('map.index');
      };

      $scope.next = function() {
        $ionicSlideBoxDelegate.next();
      };

      $scope.previous = function() {
        if ($ionicSlideBoxDelegate.currentIndex()) {
          $ionicSlideBoxDelegate.previous();
        }else{
          ionic.Platform.exitApp();
        }
      };

      // Called each time the slide changes
      $scope.slideChanged = function(index) {
        if (index == 2) {
          localStorage.setItem('doneIntro', true);
        };
        $scope.slideIndex = index;
      };

      $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
      }
    });

}(window.angular));
