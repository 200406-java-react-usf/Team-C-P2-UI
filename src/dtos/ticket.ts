export class Ticket {

	id: number;
	author_id: number;
	cost: number;
	origin: string;
	destination: string;
	departureTime: number;
	arrivalTime: number;

	constructor(id: number, au: number, cost: number, origin: string, dest: string, dept: number,  arrival: number){

		this.id = id;
		this.author_id = au;
		this.cost = cost;
		this.origin = origin;
		this.destination = dest;
		this.departureTime = dept;
		this.arrivalTime = arrival;
	}
}