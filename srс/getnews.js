import createnews from './createnews';
 	
export default function(request){
	//let createnews = require('./createnews');
	fetch(request)
   .then(function (response) {
       if (response.ok) {
           response.json().then((data) => createnews(data));         
       } else {
           console.log('Network response was not ok.');
       }
   })
      .catch((error) => console.log('There has been a problem with your fetch operation: ' + error.message));
};
