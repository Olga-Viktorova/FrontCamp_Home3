import style from '../style/page.less';
let button = document.getElementById('shownewsbutton');
button.onclick = function(){
	button.setAttribute("style", "display:none");
	require.ensure(['./shownews'], function(require){
	 	let shownews = require('./shownews');
	 	let css = require('../style/news.less');
	    shownews();
	})
};