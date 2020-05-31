
import { Dispatch } from "redux"
import { loginActionTypes } from "./login-action";
import { endSession } from "../remote/auth-service";

export const logoutActionTypes = {
    SUCCESSFUL_LOGOUT: 'TRAVEL_APP_SUCCESSFUL_LOGOUT',
    INTERNAL_SERVER_ERROR: 'TRAVEL_APP_INTERNAL_SERVER_ERROR'
}

export const logoutAction = () => async (dispatch: Dispatch) => {
    try {
        let response = await endSession();
        console.log(`logged out: ${response}`);
        dispatch({
            type: logoutActionTypes.SUCCESSFUL_LOGOUT,
            payload: response
        });

        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: logoutActionTypes.INTERNAL_SERVER_ERROR,
            payload: e.response.data.message
        })
    }
}