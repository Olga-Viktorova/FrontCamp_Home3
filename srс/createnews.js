export default function(response) {
    
var divNews = document.createElement('div');
divNews.setAttribute("class", "body");
var header = document.createElement('div')
header.innerHTML = response.source;
header.setAttribute("class", "header");
divNews.appendChild(header);

document.body.appendChild(divNews);
var ul = document.createElement('ul');
divNews.appendChild(ul)

    for (let value of response.articles) {
    var div = document.createElement('div');
    div.setAttribute("class", "row"); 
    ul.appendChild(div);
             var li = document.createElement('li');
             div.appendChild(li);
             
              var img = document.createElement('img');
                 img.setAttribute("src", `${value.urlToImage}`);
                 img.setAttribute("class", "img");
                 li.appendChild(img);

             var strong = document.createElement('strong');
             li.appendChild(strong);

                 var a = document.createElement('a');
                 a.setAttribute("href", `${value.url}`);
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