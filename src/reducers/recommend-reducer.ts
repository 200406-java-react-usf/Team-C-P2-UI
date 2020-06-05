import { IRecState } from '.'
import { AnyAction } from 'redux';
import { recommendActionTypes } from '../actions/recommend-action';

const initialState: IRecState = {
	destination: '',
	errorMessage: ''
}

export const recommendReducer = (state: IRecState = initialState, action: AnyAction) => {

	switch (action.type) {
		case recommendActionTypes.SUCCESSFULLY_SET_DESTINATION:
			return {
				...state,
				destination: action.payload
			}
		
		case recommendActionTypes.BAD_REQUEST:
		case recommendActionTypes.INTERNAL_SERVER_ERROR:
			return {
				...state,
				errorMessage: action.payload
			}
		
		default:
			return state;
	}
}