export class NewTicket {

	author_id: number;
	cost: number;
	origin: string;
	destination: string;
	departure: Date;
	arrival: Date;

	constructor(au: number, cost: number, origin: string, dest: string, dept: Date,  arrival: Date){

		this.author_id = au;
		this.cost = cost;
		this.origin = origin;
		this.destination = dest;
		this.departure = dept;
		this.arrival = arrival;
	}
}