import axios from "axios";
import { baseUrl } from "../constants";

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/login`, userData);
    return res;
  } catch (e) {
    console.debug(e);
  }
};
