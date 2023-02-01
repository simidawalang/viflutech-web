import React from "react";
import Link from "next/link";

export const DeviceCard = ({href, content}) => {
    return <Link href={href}><div className="device-card">{content}</div></Link>
}