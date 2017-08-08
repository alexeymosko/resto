;(function() {
"use strict";

var app = angular.module('resto', ['ui.router', "firebase"]);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) { 
	var config = {
		apiKey: "AIzaSyA-0GCqO-PxUX0codWWI3i2dnXujudplCQ",               // Your Firebase API key
    	authDomain: "resto-2411b.firebaseapp.com",       // Your Firebase Auth domain ("*.firebaseapp.com")
    	databaseURL: "https://resto-2411b.firebaseio.com/",     // Your Firebase Database URL ("https://*.firebaseio.com")
    	storageBucket: "gs://resto-2411b.appspot.com",  // Your Cloud Storage for Firebase bucket ("*.appspot.com")
    	messagingSenderId: "293973128456",
	}
	firebase.initializeApp(config);
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/components/home/homeView.html'
		})
		.state('news', {
			url: '/news',
			templateUrl: 'app/components/news/newsView.html'
		})
		.state('newsfull', {
			url: '/news/:id',
			templateUrl: 'app/components/newsfull/newsfullView.html'
		})
		.state('review', {
			url: '/review/:id',
			templateUrl: 'app/components/review/reviewView.html'
		}),


	$locationProvider.html5Mode(true);

});
}());
