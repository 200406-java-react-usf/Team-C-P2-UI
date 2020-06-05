import { getTicketById } from "../remote/ticket-service"
import { Dispatch } from "redux"

export const recommendActionTypes = {
	SUCCESSFULLY_SET_DESTINATION: 'DESTINATION_SET',
	BAD_REQUEST: 'TRAVEL_APP_BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'TRAVEL_APP_INTERNAL_SERVER_ERROR',
}

export const recommendAction = (ticket_id: number) => async (dispatch: Dispatch) => {

	try {		
		let response = await getTicketById(ticket_id);
		dispatch({
			type: recommendActionTypes.SUCCESSFULLY_SET_DESTINATION,
			payload: response.destination
		});

	} catch (e) {
		let status = e.response?.status;
		if(status === 400) {
			dispatch({
				type:  recommendActionTypes.BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: recommendActionTypes.INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: Server could not be reached'
			})
		}
	}
}