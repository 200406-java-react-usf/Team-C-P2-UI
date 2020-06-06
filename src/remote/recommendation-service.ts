import { recClient } from "./recommendation-client"

/**
 * Takes in the destination from a specified ticket and makes a request to an exetranl api
 * to return the top ten points of interest for that destination
 * @param destination destination of a specified ticket
 */
export const getTopTen = async (destination: string) => {

	let response = await recClient.get(`/list?limit=1&query=${destination}&level=poi&limit=10`)
	return response.data.data.places;

} 