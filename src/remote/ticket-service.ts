import { travelClient } from './travel-client';

export async function getTickets() {

	let response = await travelClient.get('/tickets');
	return await response.data;
}