import getnews from './getnews';
import NewsLoaderFactory from './NewsLoaderFactory';
 
export default class NewsLoaderThroughNewsApiFactory extends NewsLoaderFactory{
	constructor(){
		super();
	}

	getNews(){
		const request = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=fb92b4b2a88144d59dfb7d1dc04f25d4';
		var data = getnews(request);
	}
}
