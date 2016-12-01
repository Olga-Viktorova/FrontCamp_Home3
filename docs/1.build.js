webpackJsonphome([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getnews = __webpack_require__(7);
	
	var _getnews2 = _interopRequireDefault(_getnews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = function () {
		var request = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=fb92b4b2a88144d59dfb7d1dc04f25d4';
		(0, _getnews2.default)(request);
	};

/***/ },
/* 7 */
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
	            });
	        } else {
	            console.log('Network response was not ok.');
	        }
	    }).catch(function (error) {
	        return console.log('There has been a problem with your fetch operation: ' + error.message);
	    });
	};
	
	var _createnews = __webpack_require__(8);
	
	var _createnews2 = _interopRequireDefault(_createnews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	                 value: true
	});
	
	exports.default = function (response) {
	
	                 var divNews = document.createElement('div');
	                 divNews.setAttribute("class", "body");
	
	                 var newsLogo = __webpack_require__(9);
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
	
	                                                   var div = document.createElement('div');
	                                                   div.setAttribute("class", "row");
	                                                   ul.appendChild(div);
	                                                   var li = document.createElement('div');
	                                                   div.appendChild(li);
	
	                                                   var img = document.createElement('img');
	                                                   img.setAttribute("src", "" + value.urlToImage);
	                                                   img.setAttribute("class", "img");
	                                                   li.appendChild(img);
	
	                                                   var strong = document.createElement('strong');
	                                                   li.appendChild(strong);
	
	                                                   var a = document.createElement('a');
	                                                   a.setAttribute("href", "" + value.url);
	                                                   a.setAttribute("class", "link");
	                                                   a.innerHTML = value.description + " ";
	                                                   strong.appendChild(a);
	
	                                                   var p = document.createElement('p');
	                                                   li.appendChild(p);
	                                                   var node = document.createTextNode("" + value.title);
	                                                   p.appendChild(node);
	
	                                                   var publishedAt = document.createElement('div');
	                                                   publishedAt.innerHTML = "Publish at: " + ("" + value.publishedAt);
	                                                   li.appendChild(publishedAt);
	
	                                                   var publishedAt = document.createElement('div');
	                                                   publishedAt.innerHTML = "By: " + ("" + value.author);
	                                                   li.appendChild(publishedAt);
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "src/pics/bbc_news_logo.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n  font-size: 40px;\n  color: #FFFFFF;\n  text-align: center;\n  font-weight: bold;\n}\n.logo {\n  width: 11%;\n  float: center;\n  padding: 10px;\n}\n.row {\n  background: #F5F5F5;\n  padding-right: 20px;\n  border: solid 1px black;\n  position: relative;\n  margin: 10px auto;\n  padding: 10px;\n}\n.img {\n  width: 10%;\n  float: left;\n  padding: 5px;\n}\n@media (max-width: 2000px) {\n  .row {\n    margin: 10px auto;\n    width: 70%;\n    padding: 10px;\n  }\n}\n@media (max-width: 1259px) {\n  .row {\n    margin: 10 auto;\n    width: 80%;\n    padding: 10px;\n  }\n}\n@media (max-width: 779px) {\n  .row {\n    margin: 10 auto;\n    width: 90%;\n    padding: 10px;\n  }\n}\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=1.build.js.map