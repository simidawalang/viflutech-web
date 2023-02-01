import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../../../components/ui/button/Button";

const Device = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <header className="dashboard-header">
        <div className="main-app_body">
          <h1>Hello, John</h1>
          <p>Never put off tomorrow, what can be done today.</p>
        </div>
        <Button content="Add New Device" variant="blue" />
      </header>
      <div>
        <Link href="/app/dashboard">All Devices</Link>
        <span> &#60;</span>
        <Link href={"/app/dashboard/devices" + id?.toString()}>
          <span> Device {id}</span>
        </Link>
      </div>
    </>
  );
};

export default Device;
