import axios from 'axios';

export const travelClient = axios.create({
	baseURL: 'http://project2teamcapi-env.eba-pvywbua7.us-east-1.elasticbeanstalk.com',
	// baseURL: 'http://localhost:8080/travelapp',
	headers: {
		'Content-Type': 'application/json'
	},
})

export const config = {
	headers: {
		Authorization: localStorage.getItem('authorization')
	}	
}