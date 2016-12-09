webpackJsonphome([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _NewsLoaderThroughNewsApiFactory = __webpack_require__(8);
	
	var _NewsLoaderThroughNewsApiFactory2 = _interopRequireDefault(_NewsLoaderThroughNewsApiFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = function () {
		var css = __webpack_require__(16);
		var news = new _NewsLoaderThroughNewsApiFactory2.default();
		news.getNews();
		//const request = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=fb92b4b2a88144d59dfb7d1dc04f25d4';
		//getnews(request);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _getnews = __webpack_require__(9);
	
	var _getnews2 = _interopRequireDefault(_getnews);
	
	var _NewsLoaderFactory2 = __webpack_require__(15);
	
	var _NewsLoaderFactory3 = _interopRequireDefault(_NewsLoaderFactory2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewsLoaderThroughNewsApiFactory = function (_NewsLoaderFactory) {
		_inherits(NewsLoaderThroughNewsApiFactory, _NewsLoaderFactory);
	
		function NewsLoaderThroughNewsApiFactory() {
			_classCallCheck(this, NewsLoaderThroughNewsApiFactory);
	
			return _possibleConstructorReturn(this, (NewsLoaderThroughNewsApiFactory.__proto__ || Object.getPrototypeOf(NewsLoaderThroughNewsApiFactory)).call(this));
		}
	
		_createClass(NewsLoaderThroughNewsApiFactory, [{
			key: 'getNews',
			value: function getNews() {
				var request = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=fb92b4b2a88144d59dfb7d1dc04f25d4';
				var data = (0, _getnews2.default)(request);
	
				//let news = require('./createnews');
				//return news.default(data);
	
			}
		}]);
	
		return NewsLoaderThroughNewsApiFactory;
	}(_NewsLoaderFactory3.default);
	
	exports.default = NewsLoaderThroughNewsApiFactory;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (request) {
	    fetch(request).then(function (response) {
	        if (response.ok) {
	            response.json().then(function (data) {
	                return (0, _createnews2.default)(data);
	            }); //news.creatwNews(data));// createnews(data)        
	        } else {
	            console.log('Network response was not ok.');
	        }
	    }).catch(function (error) {
	        return console.log('There has been a problem with your fetch operation: ' + error.message);
	    });
	};
	
	var _createnews = __webpack_require__(10);
	
	var _createnews2 = _interopRequireDefault(_createnews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	;
	//import GetNewsThroughNewsApiFactory from './GetNewsThroughNewsApiFactory';
	
	//var news = new GetNewsThroughNewsApiFactory();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (response) {
	
	    var divNews = document.createElement('div');
	    divNews.setAttribute("class", "body");
	
	    var newsLogo = __webpack_require__(11);
	    var imgLogo = document.createElement('img');
	    imgLogo.src = newsLogo;
	    imgLogo.setAttribute("class", "logo");
	
	    var header = document.createElement('div');
	    header.setAttribute("class", "header");
	    header.appendChild(imgLogo);
	
	    divNews.appendChild(header);
	
	    document.body.appendChild(divNews);
	    var ul = document.createElement('ul');
	    divNews.appendChild(ul);
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = response.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var value = _step.value;
	
	            var news = new _News2.default();
	            //news.createNews(value);
	
	            var likeDecorator = new _LikeDecorator2.default(news);
	            likeDecorator.createNews(value);
	            likeDecorator.showNews(ul);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	};
	
	var _News = __webpack_require__(12);
	
	var _News2 = _interopRequireDefault(_News);
	
	var _LikeDecorator = __webpack_require__(13);
	
	var _LikeDecorator2 = _interopRequireDefault(_LikeDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "src/pics/bbc_news_logo.png";

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var News = function () {
	  function News() {
	    _classCallCheck(this, News);
	  }
	
	  _createClass(News, [{
	    key: "createNews",
	    value: function createNews(data) {
	      this.urlToImage = data.urlToImage;
	      this.url = data.url;
	      this.title = data.title;
	      this.publishedAt = data.publishedAt;
	      this.author = data.author;
	      this.description = data.description;
	    }
	  }, {
	    key: "showNews",
	    value: function showNews(ul) {
	      var div = document.createElement('div');
	      div.setAttribute("class", "row");
	      ul.appendChild(div);
	      var li = document.createElement('div');
	      div.appendChild(li);
	
	      var img = document.createElement('img');
	      img.setAttribute("src", this.urlToImage);
	      img.setAttribute("class", "img");
	      li.appendChild(img);
	
	      var strong = document.createElement('strong');
	      li.appendChild(strong);
	
	      var a = document.createElement('a');
	      a.setAttribute("href", this.urlToImage);
	      a.setAttribute("class", "link");
	      a.innerHTML = this.description;
	      strong.appendChild(a);
	
	      var p = document.createElement('p');
	      li.appendChild(p);
	      var node = document.createTextNode(this.title);
	      p.appendChild(node);
	
	      var publishedAt = document.createElement('div');
	      publishedAt.innerHTML = "Publish at: " + this.publishedAt;
	      li.appendChild(publishedAt);
	
	      var publishedAt = document.createElement('div');
	      publishedAt.innerHTML = "By: " + this.author;
	      li.appendChild(publishedAt);
	    }
	  }]);
	
	  return News;
	}();
	
	exports.default = News;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Decorator2 = __webpack_require__(14);
	
	var _Decorator3 = _interopRequireDefault(_Decorator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LikeDecorator = function (_Decorator) {
		_inherits(LikeDecorator, _Decorator);
	
		function LikeDecorator(news) {
			_classCallCheck(this, LikeDecorator);
	
			return _possibleConstructorReturn(this, (LikeDecorator.__proto__ || Object.getPrototypeOf(LikeDecorator)).call(this, news));
		}
	
		_createClass(LikeDecorator, [{
			key: 'showNews',
			value: function showNews(ul) {
				_get(LikeDecorator.prototype.__proto__ || Object.getPrototypeOf(LikeDecorator.prototype), 'showNews', this).call(this, ul);
				var likebutton = document.createElement('button');
				likebutton.setAttribute("class", "likebutton");
				likebutton.innerHTML = "Like";
				ul.appendChild(likebutton);
			}
		}]);
	
		return LikeDecorator;
	}(_Decorator3.default);
	
	exports.default = LikeDecorator;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _News2 = __webpack_require__(12);
	
	var _News3 = _interopRequireDefault(_News2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Decorator = function (_News) {
		_inherits(Decorator, _News);
	
		function Decorator(news) {
			_classCallCheck(this, Decorator);
	
			var _this = _possibleConstructorReturn(this, (Decorator.__proto__ || Object.getPrototypeOf(Decorator)).call(this));
	
			_this.news = news;
			return _this;
		}
	
		_createClass(Decorator, [{
			key: 'createNews',
			value: function createNews(data) {
				this.news.createNews(data);
			}
		}, {
			key: 'showNews',
			value: function showNews(ul) {
				this.news.showNews(ul);
			}
		}]);
	
		return Decorator;
	}(_News3.default);
	
	exports.default = Decorator;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewsLoaderFactory = function () {
		function NewsLoaderFactory() {
			_classCallCheck(this, NewsLoaderFactory);
		}
	
		_createClass(NewsLoaderFactory, [{
			key: "getNews",
			value: function getNews() {}
		}]);
	
		return NewsLoaderFactory;
	}();
	
	exports.default = NewsLoaderFactory;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./news.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./news.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n  font-size: 40px;\n  color: #FFFFFF;\n  text-align: center;\n  font-weight: bold;\n}\n.logo {\n  width: 11%;\n  float: center;\n  padding: 10px;\n}\n.row {\n  background: #F5F5F5;\n  padding-right: 20px;\n  border: solid 1px black;\n  position: relative;\n  margin: 10px auto;\n  padding: 10px;\n}\n.img {\n  width: 10%;\n  float: left;\n  padding: 5px;\n}\n@media (max-width: 2000px) {\n  .row {\n    margin: 10px auto;\n    width: 70%;\n    padding: 10px;\n  }\n}\n@media (max-width: 1259px) {\n  .row {\n    margin: 10 auto;\n    width: 80%;\n    padding: 10px;\n  }\n}\n.likebutton {\n  background-color: #555555;\n  border: none;\n  color: #FFFFFF;\n  padding: 15px 32px;\n  text-align: right;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 13px;\n}\n@media (max-width: 779px) {\n  .row {\n    margin: 10 auto;\n    width: 90%;\n    padding: 10px;\n  }\n}\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=1.build.js.map