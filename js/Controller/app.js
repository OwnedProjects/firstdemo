(function(){
	var app = angular.module('store', []);
	
	app.controller("StoreController", function(){
		this.product=gem;
	});
	
	app.controller("PanelController", function(){
		this.tab=1;
		
		this.setTab = function(tabVal){
			this.tab=tabVal;
		};
		
		this.chkTab = function(tabVal){
			return this.tab===tabVal;
		}
	});
	
	
	app.controller("ReviewController", function(){
		this.review={};
		
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review={};
		};
		
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review={};
		};
	});
	
	var gem=[
	{
		"gemName":"ABC",
		"gemImage":"imgs/html5.png",
		"gemDesc":"This is GEM 1",
		"reviews":[
		{	
			"stars":"5",
			"Comment":"nice One",
			"mail":"abc@gmail.com"
		},
		{	
			"stars":"3",
			"Comment":"Awesome",
			"mail":"xyz@gmail.com"
		}
		]
	},
	{
		"gemName":"XYZ",
		"gemImage":"imgs/php5.png",
		"gemDesc":"This is GEM 2",
		"reviews":[
		{	
			"stars":"5",
			"Comment":"nice One",
			"mail":"abc@gmail.com"
		},
		{	
			"stars":"3",
			"Comment":"Awesome",
			"mail":"xyz@gmail.com"
		}
		]
	}
	];
})();