import { travelClient } from './travel-client';

export async function getTickets() {

	let response = await travelClient.get('/tickets');
	console.log(response.data);
	return await response.data;
}