import getnews from './getnews'; 

export default  function() {
	const request = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=fb92b4b2a88144d59dfb7d1dc04f25d4';
	getnews(request);
}