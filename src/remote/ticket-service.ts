import { travelClient } from './travel-client';

export async function getTickets() {

	let response = await travelClient.get('/tickets');
	return await response.data;
}

export async function deleteTicketByID(id: number) {

	let response = await travelClient.delete(`/tickets/${id}`)
	return response.data;
}