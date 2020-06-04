export class NewTicket {

	author_id: number;
	cost: number;
	origin: string;
	destination: string;
	departuretime: Date;
	arrivaltime: Date;

	constructor(au: number, cost: number, origin: string, dest: string, dept: Date,  arrival: Date){

		this.author_id = au;
		this.cost = cost;
		this.origin = origin;
		this.destination = dest;
		this.departuretime = dept;
		this.arrivaltime = arrival;
	}
}