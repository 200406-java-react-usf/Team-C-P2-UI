import { Dispatch } from 'redux';
import { NewUser } from '../dtos/newUser';
import { save } from '../remote/user-service';

export const registerActionTypes = {
    SUCCESSFUL_REGISTER: 'TRAVEL_APP_SUCCESSFUL_REGISTER',
    BAD_REQUEST: 'TRAVEL_APP_BAD_REQUEST',
    INVALID_CREDENTIALS: 'TRAVEL_APP_INVALID_CREDENTIALS',
    INTERNAL_SERVER_ERROR: 'TRAVEL_APP_INTERNAL_SERVER_ERROR'
}

export const registerAction = (newUser: NewUser) => async (dispatch: Dispatch) => {
    
    try {
        
        let authUser = await save(newUser);
        dispatch({
            type: registerActionTypes.SUCCESSFUL_REGISTER,
            payload: authUser
        });

    } catch (e) {

        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: registerActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else if (status === 401) {
            dispatch({
                type: registerActionTypes.INVALID_CREDENTIALS,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: registerActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Error: Server could not be reached'
            });
        }
    }
}