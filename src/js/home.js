import style from '../style/page.less';
//import test from '../testjson/test.json';
let button = document.getElementById('shownewsbutton');
button.onclick = function(){
	button.setAttribute("style", "display:none");
	require.ensure(['./shownews'], function(require){
	 	let shownews = require('./shownews');
	 	shownews();
	})
};

let shownews = require('../testjson/test.json');

