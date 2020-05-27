export class User {

	user_id: number;
	first_name: string;
	last_name: string;
	username: string;
	password: string;
	email: string;
	role_id: number;

	constructor(id: number, fn: string, ln: string, un: string, pw: string, em: string, role: number){
		
		this.user_id = id;
		this.first_name = fn;
		this.last_name = ln;
		this.username = un;
		this.password = pw;
		this.email = em;
		this.role_id = role;

	}
}