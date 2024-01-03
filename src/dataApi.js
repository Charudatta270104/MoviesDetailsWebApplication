const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df66971006mshbd3686d60d7b781p10477cjsn7fc9bfba07be',
		'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    
	// console.log(result);
} catch (error) {
	console.error(error);
}