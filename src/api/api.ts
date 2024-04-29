import axios from "axios";
import Cookie from "js-cookie";

//? Get ALL Post

export const getALLPost = async () => {
	try {
		const response = await axios.get(`/api/post`);
		return response.data;
	} catch (error: any) {
		// console.log(error.response.data.error);
		if (error?.response?.data?.error === "invalid signature") {
			console.log("111");
			Cookie.remove("token");
		}
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
