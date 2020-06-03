import { travelClient } from './travel-client';
import { NewTicket } from '../dtos/newTicket';

export async function getTickets() {

	let response = await travelClient.get('/tickets');
	return await response.data;
}

export async function deleteTicketByID(id: number) {

	let response = await travelClient.delete(`/tickets/${id}`)
	return response.data;
}

export async function getUserTickets(id: number) {

	let response = await travelClient.get(`/users/${id}/tickets`)
	return response.data;
}

export async function createTicket(newTicket: NewTicket) {

	let response = await travelClient.post('/tickets',
		{author_id: newTicket.author_id,
		cost: newTicket.cost,
		origin: newTicket.origin,
		destination: newTicket.destination,
		departuretime: newTicket.departuretime,
		arrivaltime: newTicket.arrivaltime
		}	
	)
	return await response.data;
}