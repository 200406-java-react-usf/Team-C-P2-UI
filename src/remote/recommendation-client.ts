import axios from 'axios';

const API_Key = 'Rcaqjmf53U72mSoh3m38Z6ujIdZCwewecJcSGwi5'

export const recClient = axios.create({
	baseURL: 'https://api.sygictravelapi.com/1.1/en/places',
	headers: {
		'x-api-key': API_Key
	}
});

