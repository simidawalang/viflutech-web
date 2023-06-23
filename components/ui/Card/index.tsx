import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ReadingCardProps {
  title: String;
}
export const DeviceCard = ({
  href,
  content,
}: {
  href: string;
  content: string;
}) => {
  return (
    <Link href={href}>
      <div className="device-card">{content}</div>
    </Link>
  );
};

export const ReadingCard = ({ title, icon }: { title: string, icon: any }) => {
  return (
    <div className="reading-card">
      <div className={title}>
        <span>Viscosity</span>
        <span>5 yesterday</span>
      </div>
      <div className="reading-header">
        <Image src={icon.src} alt="viscosity" height={34} width={34} />
        <h2 className="reading-value">0.54 Pas</h2>
      </div>
      <p className="comment">Viscosity is fairly normal for fluid type.</p>
      <p className="tip">
        Note: If Fluid level gets below 5litres, it is advisable top up.
      </p>
    </div>
  );
};
