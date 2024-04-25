import axios from "axios";

//? Get ALL Post

export const getALLPost = async () => {
	try {
		const response = await axios.get(`/api/post`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
//? Get logout

export const getLogout = async () => {
	try {
		const response = await axios.get(`/api/logout`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
