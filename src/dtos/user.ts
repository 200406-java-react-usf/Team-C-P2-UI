export class User {

	id: number;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	email: string;
	role: string;

	constructor(id: number, fn: string, ln: string, un: string, pw: string, em: string, role: string){
		
		this.id = id;
		this.firstName = fn;
		this.lastName = ln;
		this.username = un;
		this.password = pw;
		this.email = em;
		this.role = role;

	}
}