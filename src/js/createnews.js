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
    var div = document.createElement('div');
    div.setAttribute("class", "row"); 
    ul.appendChild(div);
             var li = document.createElement('div');
             div.appendChild(li);
             
              var img = document.createElement('img');
                 img.setAttribute("src", `${value.urlToImage}`);
                 img.setAttribute("class", "img");
                 li.appendChild(img);

             var strong = document.createElement('strong');
             li.appendChild(strong);

                 var a = document.createElement('a');
                 a.setAttribute("href", `${value.url}`);
                 a.setAttribute("class", "link");
                 a.innerHTML  = `${value.description} `;
                 strong.appendChild(a);
                
                
                 var p = document.createElement('p');
                 li.appendChild(p);
                 var node = document.createTextNode(`${value.title}`);
                 p.appendChild(node);

                 var publishedAt = document.createElement('div')
                 publishedAt.innerHTML = "Publish at: " + `${value.publishedAt}`;
                 li.appendChild(publishedAt);

                 var publishedAt = document.createElement('div')
                 publishedAt.innerHTML = "By: " + `${value.author}`;
                 li.appendChild(publishedAt);       
        }  
}