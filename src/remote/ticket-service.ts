import { travelClient } from './travel-client';
import { NewTicket } from '../dtos/newTicket';
import { config } from './travel-client';


export async function getTickets() {

	let response = await travelClient.get('/tickets', config);
	return await response.data;
}

export async function deleteTicketByID(id: number) {

	let response = await travelClient.delete(`/tickets/${id}`, config)
	return response.data;
}

export async function getUserTickets(user_id: number) {

	let response = await travelClient.get(`/users/${user_id}/tickets`, config)	
	return response.data;
}

export async function getTicketById(id: number) {

	let response = await travelClient.get(`/tickets/${id}`, config)
	return response.data
}

export async function createTicket(newTicket: NewTicket) {

	let response = await travelClient.post('/tickets',
		{author_id: newTicket.author_id,
		cost: newTicket.cost,
		origin: newTicket.origin,
		destination: newTicket.destination,
		departuretime: newTicket.departuretime,
		arrivaltime: newTicket.arrivaltime
		},
		config	
	)
	return await response.data;
}