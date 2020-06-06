import { NewUser } from '../dtos/newUser'
import { User } from '../dtos/user';
import { travelClient } from './travel-client';
import { config } from './travel-client';

/**
 * Makes a request to get all of the users from the database
 */
export async function getAllUsers(): Promise<User[]> {

	let response = await travelClient.get("/users", {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	});
	return await response.data;
}

/**
 * Takes in a new user object and makes a request to save user to the database
 * @param newUser User Object
 */
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

/**
 * Takes in a user id and makes a request to delete that specified user from the database
 * @param id User ID
 */
export async function deleteUserById(id: number | null) {

	let response = await travelClient.delete(`/users/${id}` , {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	})
	return response.data;
}

/**
 * Takes in all params of a user object and makes a request to update the specified user info in the database
 * @param id User ID
 * @param username User username
 * @param password User password
 * @param firstName User First Name
 * @param lastName User Last Name
 * @param email User Email
 * @param role User Role
 */
export async function updateUserById(id: number | null, username: string, password: string, firstName: string, lastName: string, email: string, role: string) {

	let response = await travelClient.put(`/users`, {id, username, password, firstName, lastName, email, role}, {
		headers: {
			Authorization: localStorage.getItem('authorization')
		}	
	});
	return response.data;
}