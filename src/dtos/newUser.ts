export class NewUser {

	first_name: string;
	last_name: string;
	username: string;
	password: string;
	email: string;

	constructor(fn: string, ln: string, un: string, pw: string, em: string){
		
		this.first_name = fn;
		this.last_name = ln;
		this.username = un;
		this.password = pw;
		this.email = em;

	}
}