export default class News{
	constructor(){}

	createNews(data){
		this.urlToImage = data.urlToImage;
		this.url = data.url;
		this.title = data.title;
		this.publishedAt = data.publishedAt;
		this.author = data.author;
		this.description = data.description;
	
	}
}

