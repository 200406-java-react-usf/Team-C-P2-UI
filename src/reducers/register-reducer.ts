  
import { IRegisterState } from '.'
import { NewUser } from '../dtos/newUser';
import { AnyAction } from 'redux'
import { registerActionTypes } from '../actions/register-action';

const initialState: IRegisterState = {
    // @ts-ignore
    authUser: (null as NewUser),
    errorMessage: ''
}

export const registerReducer = (state: IRegisterState = initialState, action: AnyAction) => {

    switch (action.type) {
        case registerActionTypes.SUCCESSFUL_REGISTER:
            return {
                ...state,
                authUser: action.payload
            }

        case registerActionTypes.INVALID_CREDENTIALS:
        case registerActionTypes.BAD_REQUEST:
        case registerActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;

    }

}