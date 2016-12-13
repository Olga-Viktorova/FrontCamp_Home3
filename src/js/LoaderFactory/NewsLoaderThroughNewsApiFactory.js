import GetNews from '../DataServises/GetNews';
import News from '../Models/News';
import NewsLoaderFactory from '../LoaderFactory/NewsLoaderFactory';
 
export default class NewsLoaderThroughNewsApiFactory extends NewsLoaderFactory{
	constructor(){
		super();
	}

	getNews(){
		const request = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=fb92b4b2a88144d59dfb7d1dc04f25d4';
		return GetNews(request).then((data) => { 
			var news = [];
			for (let value of data.articles){
				let currentNews = new News(); 
				currentNews.createNews(value);
				news.push(currentNews);		
			}
			return news;

			}).catch((error) => {console.log(error)});
		
	}
}
