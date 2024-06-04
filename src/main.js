const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a18ebc26e5mshba569ca3bf9fb2fp1ebfd6jsnb3499cee31d4',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
const cities = ["alicante", "valencia", "madrid"]
for (const city of cities) {
const url = `https://open-weather13.p.rapidapi.com/city/${city}/es`
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
