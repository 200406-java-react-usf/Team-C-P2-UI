import { User } from '../dtos/user';
import { travelClient } from '../remote/travel-client';

/**
 * Takes in a username and password to set the authenticated 
 * user and assign a token use to communicate with the API
 * @param username username of user that's loggin in
 * @param password password of user that's loggin in
 */
export async function authenticate(username: string, password: string): Promise<User> {
    let response = await travelClient.post('/auth', {username, password});
    localStorage.setItem('authorization', response.headers.authorization)
    return await response.data;
}