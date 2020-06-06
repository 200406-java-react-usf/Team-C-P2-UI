import { NewUser } from '../dtos/newUser'
import { User } from '../dtos/user';
import { travelClient } from './travel-client';
import { config } from './travel-client';

export async function getAllUsers(): Promise<User[]> {

	let response = await travelClient.get("/users", {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	});
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
		}, {
			headers: {
				Authorization: localStorage.getItem('authorization')
			}	
		});
	return await response.data;
}

export async function deleteUserById(id: number | null) {

	let response = await travelClient.delete(`/users/${id}` , {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	})
	return response.data;
}

export async function updateUserById(id: number | null, username: string, password: string, firstName: string, lastName: string, email: string, role: string) {

	let response = await travelClient.put(`/users`, {id, username, password, firstName, lastName, email, role}, {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	});
	return response.data;
}