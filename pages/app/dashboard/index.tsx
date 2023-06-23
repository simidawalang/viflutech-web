import Button from "../../../components/ui/button/Button";
import { DeviceCard } from "../../../components/ui/Card";

type DeviceData = {
  name?: string;
  id?: number | string;
}[];

interface DashboardProps {
  devices: DeviceData;
}

const Dashboard = ({ devices }: DashboardProps) => {
  const id = "VI-2AH154CDEB";
  return (
    <>
      <header className="dashboard-header">
        <div className="main-app_body">
          <h1>Hello, John</h1>
          <p>Never put off tomorrow, what can be done today.</p>
        </div>
        <Button content="Add New Device" variant="blue" />
      </header>
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
