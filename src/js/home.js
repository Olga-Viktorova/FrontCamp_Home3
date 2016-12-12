import style from '../style/page.less';
import Subject from './Observer/Subject' 
//import test from '../testjson/test.json';

function extend( obj, extension ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}

let button = document.getElementById('shownewsbutton');

extend(button, new Subject());

button.onclick = function(){
	  button.notify( 'test');
}
button.onclick = addNewObserver;

function addNewObserver(){
	button.setAttribute("style", "display:none");
	require.ensure(['./shownews'], function(require){
	 	let shownews = require('./shownews');
	 	shownews();
	})
};


//button.onclick = function(){
//	button.setAttribute("style", "display:none");
//	require.ensure(['./shownews'], function(require){
//	 	let shownews = require('./shownews');
//	 	shownews();
//	})
//};

//let shownews = require('../testjson/test.json');

