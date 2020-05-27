export class Ticket {

	ticket_id: number;
	author_id: number;
	cost: number;
	origin: string;
	destination: string;
	departure: Date;
	arrival: Date;

	constructor(tk: number, au: number, cost: number, origin: string, dest: string, dept: Date,  arrival: Date){

		this.ticket_id = tk;
		this.author_id = au;
		this.cost = cost;
		this.origin = origin;
		this.destination = dest;
		this.departure = dept;
		this.arrival = arrival;
	}
}