import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../../../components/ui/button/Button";
import Image from "next/image";
import {
  ViscosityIcon,
  ThermometerIcon,
  FluidLevelIcon,
  PlaceholderImg,
} from "../../../../assets/index";
import { ReadingCard } from "../../../../components/ui/Card/index";
import { getDeviceCurrentReading } from "../../../../helpers/device";
import { LoadingSpinner } from "../../../../components";

const Device = () => {
  const [currentReading, setCurrentReading] = useState<any>({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchReadings = setInterval(async () => {
      const res = await getDeviceCurrentReading();

      setCurrentReading(res?.data?.data[0]);
    }, 5000);

    return () => clearInterval(fetchReadings);
  }, []);

  return (
    <>
      <div>
        <Link href="/app/dashboard">All Devices</Link>
        <span> &#60;</span>
        <Link href={"/app/dashboard/devices" + id?.toString()}>
          <span> Device {id}</span>
        </Link>
      </div>
      <div>
        <img src={PlaceholderImg.src} width="100%" />
      </div>

      <div className="reading-cards__container">
        <ReadingCard
          title="Temperature"
          icon={ThermometerIcon}
          reading={currentReading?.temp_in_centigrade ?? <LoadingSpinner />}
          comment="Temperature is fairly normal for fluid type."
          tip={
            <>
              <strong>Note:</strong> Temparature above 50 and below 20 is bad
              for the fluid.
            </>
          }
        />
        <ReadingCard
          title="Level"
          icon={FluidLevelIcon}
          reading={currentReading?.depth_in_cm ?? <LoadingSpinner />}
          comment="Fluid Level is proportional to Device usage"
          tip={
            <>
              <strong>Note:</strong> If Fluid level gets below 5litres, it is
              advisable top up
            </>
          }
        />
        <ReadingCard
          title="Viscosity"
          icon={ViscosityIcon}
          reading={currentReading?.viscosity ?? <LoadingSpinner />}
          comment="Viscosity is fairly normal for fluid type."
          tip={
            <>
              <strong>Note:</strong> Viscosity outside the range of 0.5 -
              0.7Pas means the fluid is adulterated
            </>
          }
        />
      </div>
    </>
  );
};

export default Device;
