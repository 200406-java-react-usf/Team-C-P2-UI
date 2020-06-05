import { recClient } from "./recommendation-client"


export const getTopTen = async (destination: string) => {

	let response = await recClient.get(`/list?limit=1&query=${destination}&level=poi&limit=10`)
	console.log(response.data)

} 