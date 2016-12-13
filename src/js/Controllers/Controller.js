import style from '../../style/page.less';
import Subject from '../Observer/Subject' ;
import NewsLoaderThroughNewsApiFactory from '../LoaderFactory/NewsLoaderThroughNewsApiFactory';
import View from '../Views/View';

export default class Controller{
	constructor (){}

	index(){
		let button = document.getElementById('shownewsbutton');

		this.extend(button, new Subject());

		button.onclick = function(){
	 		button.notify('click');
		}	
		button.onclick = this.addNewObserver;
	}

	extend( obj, extension ){
	  for ( var key in extension ){
	    obj[key] = extension[key];
	  }
	}

	addNewObserver(){
		require.ensure(['../Views/View'], function(require){

			let css = require('../../style/news.less');
			let newsLoader = new NewsLoaderThroughNewsApiFactory();

			newsLoader.getNews().then(result => { 
				let view = new View();
				view.showPage(result);
			
				}).catch((error) => {console.log(error)});
		})
	};

}