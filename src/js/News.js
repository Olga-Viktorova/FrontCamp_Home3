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

	showNews(ul){
		var div = document.createElement('div');
    	div.setAttribute("class", "row"); 
   	 	ul.appendChild(div);
             var li = document.createElement('div');
             div.appendChild(li);
             
              var img = document.createElement('img');
                 img.setAttribute("src", this.urlToImage);
                 img.setAttribute("class", "img");
                 li.appendChild(img);

             var strong = document.createElement('strong');
             li.appendChild(strong);

                 var a = document.createElement('a');
                 a.setAttribute("href", this.urlToImage);
                 a.setAttribute("class", "link");
                 a.innerHTML  = this.description;
                 strong.appendChild(a);
                
                
                 var p = document.createElement('p');
                 li.appendChild(p);
                 var node = document.createTextNode(this.title);
                 p.appendChild(node);

                 var publishedAt = document.createElement('div')
                 publishedAt.innerHTML = "Publish at: " + this.publishedAt;
                 li.appendChild(publishedAt);

                 var publishedAt = document.createElement('div')
                 publishedAt.innerHTML = "By: " + this.author;
                 li.appendChild(publishedAt);       
        }  

	}

