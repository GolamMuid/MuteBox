import axios from "axios";

//? Get ALL Post

export const getALLPost = async (id: string) => {
  try {
    const response = await axios.get(`/api/post`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
