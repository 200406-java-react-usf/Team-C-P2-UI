import { combineReducers } from "redux";
import { User } from '../dtos/user';
import { loginReducer } from './login-reducer';
import { logoutReducer } from './logout-reducer';
import { recommendReducer } from './recommend-reducer';


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

export interface IRecState {
	destination: string;
	errorMessage: string;
}

export interface IState {
	login: ILoginState;
	logout: ILogoutState;
	recommend: IRecState;
}

export const state = combineReducers<IState>({
	login: loginReducer,
	logout: logoutReducer,
	recommend: recommendReducer
})