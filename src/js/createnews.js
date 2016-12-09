import News from './News';
import LikeDecorator from './LikeDecorator';

export default function(response) {

let divNews = document.createElement('div');
divNews.setAttribute("class", "body");

let newsLogo = require('../pics/bbc_news_logo.png');
let imgLogo =document.createElement('img');
imgLogo.src = newsLogo;
imgLogo.setAttribute("class", "logo")

let header = document.createElement('div')
header.setAttribute("class", "header");
header.appendChild(imgLogo);

divNews.appendChild(header);

document.body.appendChild(divNews);
var ul = document.createElement('ul');
divNews.appendChild(ul)

    for (let value of response.articles) {
        var news = new News();
        //news.createNews(value);
         
        var likeDecorator = new LikeDecorator(news);
        likeDecorator.createNews(value);
        likeDecorator.showNews(ul);   

    }  
}