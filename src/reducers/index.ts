import { combineReducers } from "redux";
import { User } from '../dtos/user';
import { loginReducer } from './login-reducer';
import { logoutReducer } from "./logout-reducer";
import { registerReducer } from './register-reducer';


export interface ILoginState {
	authUser: User;
	errorMessage: string;
}


export interface ILogoutState {
	authUser: User;
	errorMessage: string
}

export interface IRegisterState {
	authUser: User;
	errorMessage: string;
}

export interface IState {
	login: ILoginState;
	logout: ILogoutState;
	register: IRegisterState;
}

export const state = combineReducers<IState>({
	login: loginReducer,
	logout: logoutReducer,
	register: registerReducer

})