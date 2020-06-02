import { NewUser } from '../dtos/newUser'
import { User } from '../dtos/user';
import { travelClient } from './travel-client';


export async function getAllUsers(): Promise<User[]> {

	let response = await travelClient.get("/users");
	console.log(response.data);
	return await response.data;
}

export async function save(newUser: NewUser): Promise<User> {

	let response = await travelClient.post("/users", 
		{firstName: newUser.firstName,
		 lastName: newUser.lastName,
		 username: newUser.username,
		 password: newUser.password,
		 email: newUser.email,
		 role: ''
		});
	console.log(response.data);
	return await response.data;
}