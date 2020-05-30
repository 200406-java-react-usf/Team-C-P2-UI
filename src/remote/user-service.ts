import { NewUser } from '../dtos/newUser'
import { User } from '../dtos/user';
import { travelClient } from './travel-client';


export async function getAllUsers(): Promise<User[]> {

	let response = await travelClient.get("/user");
	console.log(response.data);
	return await response.data;
}

export async function save(newUser: NewUser): Promise<User> {

	let response = await travelClient.post("/users", newUser);
	console.log(response.data);
	return await response.data;
}