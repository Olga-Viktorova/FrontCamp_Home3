import Decorator from './Decorator';

export default class LikeDecorator extends Decorator{
	constructor(news){
		super(news);
	}

	createNews(data)
	{
		super.createNews(data);
		this.CountLike = 1;
	}

	showNews(div){
		var likebutton = document.createElement('button')
		likebutton.setAttribute("class", "likebutton");
        likebutton.innerHTML = "Like";
        div.appendChild(likebutton);  
	}
}