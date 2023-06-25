import axios from "axios";
import SecureLS from "secure-ls";
import { baseUrl } from "../constants";

export const getDeviceCurrentReading = async () => {
  try {
    const ls = new SecureLS();

    const token = ls.get("token");
    const res = await axios.get(
      `${baseUrl}/sensor_readings?limit=1&page=1&device_id=VI-2AH154CDEB`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(token);
    return res;
  } catch (e) {
    console.debug(e);
  }
};


