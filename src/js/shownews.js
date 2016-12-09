import NewsLoaderThroughNewsApiFactory from './NewsLoaderThroughNewsApiFactory';

module.exports =  function() {
	let css = require('../style/news.less');
	let news = new NewsLoaderThroughNewsApiFactory();
	news.getNews();
}