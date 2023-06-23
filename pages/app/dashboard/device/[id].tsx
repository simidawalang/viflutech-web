import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../../../components/ui/button/Button";
import Image from "next/image";
import { ViscosityIcon } from "../../../../assets";
import { ReadingCard } from "../../../../components/ui/Card/index";

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

      <div className="reading-cards__container">
        <ReadingCard title="Viscosity" icon={ViscosityIcon} />
        <ReadingCard title="Viscosity" icon={ViscosityIcon} />
        <ReadingCard title="Viscosity" icon={ViscosityIcon} />
      </div>
    </>
  );
};

export default Device;
