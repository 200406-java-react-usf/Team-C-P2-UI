import { Dispatch } from "redux"

export const recommendActionTypes = {
	SUCCESSFULLY_SET_DESTINATION: 'DESTINATION_SET',
	BAD_REQUEST: 'TRAVEL_APP_BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'TRAVEL_APP_INTERNAL_SERVER_ERROR',
}

export const recommendAction = (destination: string) => async (dispatch: Dispatch) => {

	try {		
		dispatch({
			type: recommendActionTypes.SUCCESSFULLY_SET_DESTINATION,
			payload: destination
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