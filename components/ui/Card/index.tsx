import React, { ReactNode } from "react";
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

export const ReadingCard = ({
  title,
  icon,
  reading,
  comment,
  tip,
}: {
  title: string;
  icon: any;
  reading: string | number | ReactNode;
  comment?: string;
  tip?: string | ReactNode;
}) => {
  return (
    <div className="reading-card">
      <div className="title">
        <span>{title}</span>
        <span className="comparison">5 yesterday</span>
      </div>
      <div className="reading-header">
        <Image src={icon.src} alt="viscosity" height={34} width={34} />
        <h2 className="reading-value">
          {reading} {title.toLowerCase() === "temperature" && "℃"}
          {title.toLowerCase() === "level" && "cm"}
          {title.toLowerCase() === "viscosity" && "Pas"}
        </h2>
      </div>
      <p className="comment">{comment}</p>
      <p className="tip">{tip}</p>
    </div>
  );
};
