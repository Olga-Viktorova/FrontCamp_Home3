import News from '../Models/News';

export default class Decorator extends News {
	constructor(news){
		super();
		this.news = news;
	}

	createNews(data){
		this.news.createNews(data);
	}

	showNews(ul){
		this.news.showNews(ul);
	}

}