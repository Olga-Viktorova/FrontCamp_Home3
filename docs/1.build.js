webpackJsonphome([1],{

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
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

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n  font-size: 40px;\n  color: #FFFFFF;\n  text-align: center;\n  font-weight: bold;\n}\n.logo {\n  width: 11%;\n  float: center;\n  padding: 10px;\n}\n.row {\n  background: #F5F5F5;\n  padding-right: 20px;\n  border: solid 1px black;\n  position: relative;\n  margin: 10px auto;\n  padding: 10px;\n}\n.img {\n  width: 10%;\n  float: left;\n  padding: 5px;\n}\n@media (max-width: 2000px) {\n  .row {\n    margin: 10px auto;\n    width: 70%;\n    padding: 10px;\n  }\n}\n@media (max-width: 1259px) {\n  .row {\n    margin: 10 auto;\n    width: 80%;\n    padding: 10px;\n  }\n}\n.likebutton {\n  background-color: #555555;\n  border: none;\n  color: #FFFFFF;\n  padding: 15px 32px;\n  text-align: right;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 13px;\n}\n@media (max-width: 779px) {\n  .row {\n    margin: 10 auto;\n    width: 90%;\n    padding: 10px;\n  }\n}\n.button {\n  display: none;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=1.build.js.map