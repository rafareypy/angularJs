angular.module("ui", []);

angular.module("ui").run(function($templateCache){
	$templateCache.put("view/accordion.html", "<div class='ui-accordion-title' ng-click='open()'' >{{title}}</div><div class='ui-accordion-content' ng-show='isOpened' ng-transclude></div>");
});

angular.module("ui").directive("uiAccordions", function(){

	return{
		controller: function($scope, $element, $attrs){
			var accordions = [];
			
			this.registerAccordion = function(accordion){
				console.log(accordion.$id);
				accordions.push(accordion);
			};

			this.closeAll = function(){
				console.log(accordions);
				accordions.forEach(function(accordion){
					accordion.isOpened = false;
				});
			}

			this.helloWorld = function(){
				console.log('helloWorld');
			};
		}
	};

});

angular.module("ui").directive("uiAccordion", function(){
	return{
		templateUrl: "view/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require : "^uiAccordions",
		link: function(scope, element, attrs, ctrl){
			ctrl.registerAccordion(scope);
			scope.open = function(){
				ctrl.closeAll();	
				scope.isOpened = !scope.isOpened;
			}
		}
	};
});