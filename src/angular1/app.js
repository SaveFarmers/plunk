var app = angular.module('plunker', []);

app.directive("angular1Directive", function() {

  // ========== The directive object ==========

  return {
    restrict: "E",
    scope: {},
    template: '<div class="angular-1-directive">{{text}}</div>',
    link: linkDirective,
  };
  
  function linkDirective(scope, element, attrs) {
    scope.text = "This is an Angular 1.x directive";
  }
});
