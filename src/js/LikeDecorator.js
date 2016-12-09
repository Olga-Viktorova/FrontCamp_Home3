import Decorator from './Decorator';

export default class LikeDecorator extends Decorator{
	constructor(news){
		super(news);
	}


	showNews(ul){
		super.showNews(ul);
		var likebutton = document.createElement('button')
		likebutton.setAttribute("class", "likebutton");
        likebutton.innerHTML = "Like"
        ul.appendChild(likebutton);  
	}
}