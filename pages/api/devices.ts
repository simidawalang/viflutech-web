import type { NextApiRequest, NextApiResponse } from "next";

type DeviceData = {
  name?: string;
  id?: number | string;
}[];

type DD = {
    devices: DeviceData
}
export default async function getDevices(
  req: NextApiRequest,
  res: NextApiResponse<DD>
) {
  res.status(200).json({
    devices: [
      { id: 1, name: "Device 1" },
      { id: 2, name: "Device 2" },
      { id: 3, name: "Device 3" },
      { id: 4, name: "Device 4" },
      { id: 5, name: "Device 5" },
      { id: 6, name: "Device 6" },
    ],
  });}
