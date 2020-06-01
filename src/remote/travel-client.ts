import axios from 'axios';

export const travelClient = axios.create({
	baseURL: 'http://java-react-usf-project2-team-c.s3-website-us-east-1.amazonaws.com/',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
})