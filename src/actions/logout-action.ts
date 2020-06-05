
import { Dispatch } from "redux"
import { loginActionTypes } from "./login-action";

export const logoutActionTypes = {
    SUCCESSFUL_LOGOUT: 'TRAVEL_APP_SUCCESSFUL_LOGOUT',
    INTERNAL_SERVER_ERROR: 'TRAVEL_APP_INTERNAL_SERVER_ERROR'
}

export const logoutAction = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGOUT,
            payload: null
        })
    } catch (e) {
        dispatch({
            type: logoutActionTypes.INTERNAL_SERVER_ERROR,
            payload: e.response.data.message
        })
    }
}