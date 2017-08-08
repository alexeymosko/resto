angular.module('resto').run(['$templateCache', function($templateCache) {$templateCache.put('components/featured/featuredTemplate.html','<div class = "featured-container">\n\t<h2 class = "featured-headline">Featured dishes</h2>\n\t<div class = "featured-list">\n\t\t<div class = "featured-item" ng-repeat = "item in featuredCtrl.dishes track by $index">\n\t\t\t<a ui-sref="review({id: $index})">\n\t\t\t\t<img class = "featured-item-pic" ng-src = "{{item.pic}}">\n\t\t\t</a>\n\t\t\t<div class = "featured-item-info">\n\t\t\t\t<a ui-sref="review({id: $index})">\n\t\t\t\t\t<div class = "featured-item-info__name">{{item.description.name}}</div>\n\t\t\t\t</a>\n\t\t\t\t<div class = "featured-item-info__price">{{item.description.price}}</div>\n\t\t\t\t<rating stars="{{item.avgRank}}"></rating>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>');
$templateCache.put('components/form/formTemplate.html','<div class = "review-ready">\t\t\n\t<div>\n\t\t<h2 class = "review-ready__headline">{{formCtrl.reviewReady.headline}}</h2>\n\t\t<rating stars="{{formCtrl.reviewReady.rank}}"></rating>\n\t\t<p class = "review-ready__author">{{formCtrl.reviewReady.author}}</p>\n\t\t<p class = "review-ready__text">{{formCtrl.reviewReady.text}}</p>\n\t</div>\n</div>\n<form name = "review-form" class = "review-form" ng-submit = "formCtrl.submitForm()">\n\t<p>Your name</p>\n\t<input type = "text" class = "review-form__username" ng-model = "formCtrl.reviewReady.author">\n\t<p>Review headline</p>\n\t<input type = "text" class = "review-form__headline" ng-model = "formCtrl.reviewReady.headline">\n\t<p>Your review</p>\n\t<textarea class = "review-form__text" ng-model = "formCtrl.reviewReady.text"></textarea>\n\t<p>Please rate the dish</p>\n\t<div class = "rating">\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : formCtrl.reviewReady.rank > 0}" ng-click = "formCtrl.setRank(1)"></span>\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : formCtrl.reviewReady.rank > 1}" ng-click = "formCtrl.setRank(2)"></span>\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : formCtrl.reviewReady.rank > 2}" ng-click = "formCtrl.setRank(3)"></span>\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : formCtrl.reviewReady.rank > 3}" ng-click = "formCtrl.setRank(4)"></span>\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : formCtrl.reviewReady.rank > 4}" ng-click = "formCtrl.setRank(5)"></span>\n</div>\n\t<input type = "hidden" value = "" ng-model = "formCtrl.reviewReady.rank">\n\t<button type = "submit">Submit your review</button>\n</form>\n');
$templateCache.put('components/menu/menuTemplate.html','<div class = menu-container>\n\t<h2 class = "menu-headline"><span class = "menu-headline__text">The Menu</span></h2>\n\t<ul class = "menu-items">\n\t\t<li class = "menu-item" ng-repeat = "item in menuCtrl.dishes track by $index">\n\t\t\t<div class = "menu-item-description">\n\t\t\t\t<div class = "menu-item-description__name">{{item.description.name}}</div>\n\t\t\t\t<div class = "menu-item-description__ingredients">{{item.description.ingredients}}</div>\n\t\t\t</div>\n\t\t\t<div class = "menu-item__line"></div>\n\t\t\t<div class = "menu-item__price">{{item.price}}</div>\n\t\t</li>\n\t</ul>\n\t<button class = "menu-loadmore"><span>load more</span></button>\n</div>');
$templateCache.put('components/news/newsTemplate.html','<div class = news-container>\n\t<div class = "news-item" ng-repeat = "item in newsCtrl.news track by $index" >\n\t\t<h2 class = "news-item__headline">{{item.headline}}</h2>\n\t\t<img class = "news-item__pic" ng-src = "{{item.pic}}">\n\t\t<p class = "news-item__text">{{item.text}}</p>\n\t\t<a class = "news-item__link" ui-sref="newsfull({id: $index})">Read more</a>\n\t</div>\n</div>');
$templateCache.put('shared/footer/footerTemplate.html','');
$templateCache.put('shared/navbar/navbarTemplate.html','<nav class = "nav">\n\t<div class = "navbar-container">\n\t\t<a class = "logo" href=""></a>\n\t\t<ul class = "top-menu">\n\t\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="home" alt="">Our story</a></li>\n\t\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="home" alt="">Menu</a></li>\n\t\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="home" alt="">Reservations</a></li>\n\t\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="news" alt="">News</a></li>\n\t\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="home" alt="">Reviews</a></li>\n\t\t</ul>\n\t</div>\n</nav>');
$templateCache.put('shared/newsfull/newsfullTemplate.html','<article class = "newsfull">\n\t\t<h2 class = "newsfull__headline">{{artclCtrl.newsfull.headline}}</h2>\n\t\t<img class = "news-item__pic" ng-src = "{{artclCtrl.newsfull.pic}}">\n\t\t<div class = "news-item__text" ng-bind-html = "fulltext"></div>\n</article>');
$templateCache.put('shared/rating/ratingTemplate.html','<div class = "rating">\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : stars > 0}"></span>\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : stars > 1}"></span>\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : stars > 2}"></span>\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : stars > 3}"></span>\n\t<span class = "rating-star" ng-class = "{\'rating-star--active\' : stars > 4}"></span>\n</div>');
$templateCache.put('shared/review/reviewTemplate.html','<article class = "review">\n\t\t<h2 class = "review__headline">{{rewCtrl.data.description.name}}</h2>\n\t\t<img class = "review__pic" ng-src = "{{rewCtrl.data.pic}}">\n\t\t<p class = "review__ingredients">{{rewCtrl.data.description.ingredients}}</p>\n\t\t<div class = "review__price">{{rewCtrl.data.price}}</div>\t\t\n\t\t<div class = "review-reviews" ng-repeat = "item in rewCtrl.data.reviews track by $index">\n\t\t\t<rating stars="{{item.rank}}"></rating>\n\t\t\t<p class = "review-reviews__text">{{item.review}}</p>\n\t\t</div>\n</article>\n<form-block></form-block>');}]);