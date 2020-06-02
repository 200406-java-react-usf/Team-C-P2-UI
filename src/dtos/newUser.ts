export class NewUser {

	firstName: string;
	lastName: string;
	username: string;
	password: string;
	email: string;

	constructor(fn: string, ln: string, un: string, pw: string, em: string){
		
		this.firstName = fn;
		this.lastName = ln;
		this.username = un;
		this.password = pw;
		this.email = em;

	}
}