import axios from 'axios';

export const travelClient = axios.create({
	baseURL: 'http://project2teamcapi-env.eba-pvywbua7.us-east-1.elasticbeanstalk.com',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
})