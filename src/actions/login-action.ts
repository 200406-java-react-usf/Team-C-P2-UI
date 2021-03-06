import { Dispatch } from 'redux';
import { authenticate } from '../remote/auth-service';

export const loginActionTypes = {
    SUCCESSFUL_LOGIN: 'TRAVEL_APP_SUCCESSFUL_LOGIN',
    BAD_REQUEST: 'TRAVEL_APP_BAD_REQUEST',
    INVALID_CREDENTIALS: 'TRAVEL_APP_INVALID_CREDENTIALS',
    INTERNAL_SERVER_ERROR: 'TRAVEL_APP_INTERNAL_SERVER_ERROR',
    SUCCESSFUL_LOGOUT: 'TRAVEL_APP_SUCCEFUL_LOGOUT'
}

export const loginAction = (username: string, password: string) => async (dispatch: Dispatch) => {
    
    try {
        
        let authUser = await authenticate(username, password);
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: authUser
        });

    } catch (e) {

        let status = e.response?.status;
        if (status === 400) {
            dispatch({
                type: loginActionTypes.BAD_REQUEST,
                payload: e.response?.data.message
            });
        } else if (status === 401) {
            dispatch({
                type: loginActionTypes.INVALID_CREDENTIALS,
                payload: e.response?.data.message
            });
        } else {
            dispatch({
                type: loginActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response?.data.message || 'Error: Server could not be reached'
            });
        }
    }
}