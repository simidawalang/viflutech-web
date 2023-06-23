import { useEffect, useState } from "react";
import Button from "../../../components/ui/button/Button";
import { DeviceCard } from "../../../components/ui/Card";
import SecureLS from "secure-ls";
import { deviceId } from "../../../constants";


const Dashboard = () => {
  const id = deviceId;
  const [user, setUser] = useState<any>({});

  useEffect(() => {
  const ls = new SecureLS();
    setUser(ls.get("user"));
  }, []);


  return (
    <>
      <header className="dashboard-header">
        <div className="main-app_body">
          <h1>Hello{user ? `, ${user.firstname}` : ""}</h1>
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
