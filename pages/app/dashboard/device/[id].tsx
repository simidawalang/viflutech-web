import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../../../components/ui/button/Button";
import Image from "next/image";
import { ViscosityIcon } from "../../../../assets";

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
        <div className="reading-card">
          <div className="title">
            <span>Viscosity</span>
            <span>5 yesterday</span>
          </div>
          <div>
            <Image
              src={ViscosityIcon.src}
              alt="viscosity"
              height={34}
              width={34}
            />
            <h2>0.54 Pas</h2>
          </div>
          <p>Viscosity is fairly normal for fluid type.</p>
          <p>
            Note: If Fluid level gets below 5litres, it is advisable top up.
          </p>
        </div>
      </div>
    </>
  );
};

export default Device;
