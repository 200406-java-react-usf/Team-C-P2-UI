import { travelClient } from './travel-client';
import { NewTicket } from '../dtos/newTicket';
import { config } from './travel-client';

/**
 * Makes a request to the API to get all tickets from the database
 */
export async function getTickets() {

	let response = await travelClient.get('/tickets', {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	});
	return await response.data;
}

/**
 * Takes in a ticket ID and makes a request to delete that ticket from the database
 * @param id ticket ID
 */
export async function deleteTicketByID(id: number) {

	let response = await travelClient.delete(`/tickets/${id}`, {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	})
	return response.data;
}

/**
 * Takes in a user ID and makes a request to get all of the tickets that belong to that user
 * @param user_id user ID
 */
export async function getUserTickets(user_id: number) {

	let response = await travelClient.get(`/users/${user_id}/tickets`, {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	})	
	return response.data;
}

/**
 * Takes in a ticekt ID and makes a request to return the specified ticket
 * @param id ticket ID
 */
export async function getTicketById(id: number) {

	let response = await travelClient.get(`/tickets/${id}`, {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	})
	return response.data
}

/**
 * Takes in a a new ticket object and makes a request to save that ticket to the database
 * @param newTicket new Ticket Object
 */
export async function createTicket(newTicket: NewTicket) {

	let response = await travelClient.post('/tickets',
		{author_id: newTicket.author_id,
		cost: newTicket.cost,
		origin: newTicket.origin,
		destination: newTicket.destination,
		departuretime: newTicket.departuretime,
		arrivaltime: newTicket.arrivaltime
		},
		{
			headers: {
				Authorization: localStorage.getItem('authorization')
			}	
		}	
	)
	return await response.data;
}