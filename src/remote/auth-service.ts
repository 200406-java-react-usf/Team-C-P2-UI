import { User } from '../dtos/user';
import { travelClient } from '../remote/travel-client';

export async function authenticate(username: string, password: string): Promise<User> {
    let response = await travelClient.post('/auth', {username, password});
    return await response.data;
}

export async function endSession() {
    return await travelClient.get('/auth');
}