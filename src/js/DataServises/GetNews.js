export default function(request){
	return fetch(request)
  .then(function (response) {
      if (response.ok) {
      	 return response.json();
       } else {
           console.log('Network response was not ok.');
       }
   })
      .catch((error) => console.log('There has been a problem with your fetch operation: ' + error.message));
};
 	
