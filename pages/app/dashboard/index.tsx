import { DeviceCard } from "../../../components/ui/Card";
import { deviceId } from "../../../constants";

const Dashboard = () => {
  const id = deviceId;

  console.log(deviceId)

  return (
    <>
      <div className="card-grid-container">
        <DeviceCard
          content={`Device ${id}`}
          href={`/app/dashboard/device/${id}`}
        />
      </div>
    </>
  );
};

type DevicesArray = {
  id?: string | number;
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/devices");
  const data = await res.json();

  return {
    props: {
      devices: data.devices,
    },
  };
}
export default Dashboard;
