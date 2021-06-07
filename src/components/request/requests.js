const API_KEY = "a64gs8es8g4s65dfaef48da84";

const requests = {

fetchTrending : `/trending/all/api=${API_KEY}` ,

fetchNextWeek: `/discover/api=${API_KEY}` ,

fetchTopRated: `/movie/top_rated/api=${API_KEY}` ,

fetchActionMovies: `/discover/api=${API_KEY}` ,

fetchComedyMovies: `/movie/top_rated/api=${API_KEY}`,

fetchHorrorMovies: `/trending/all/api=${API_KEY}`,

fetchRomanceMovies: `/trending/all/api=${API_KEY}`,

fetchDocumentaries: `/trending/all/api=${API_KEY}`

}

export default requests;