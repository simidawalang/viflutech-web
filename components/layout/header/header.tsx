import React, { useEffect, useState } from "react";
import Image from "next/image";
import SecureLS from "secure-ls";
import Button from "../../ui/button/Button";
import { WavingEmoji } from "../../../assets";
const Header = () => {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const ls = new SecureLS();
    setUser(ls.get("user"));
  }, []);

  return (
    <header className="dashboard-header">
      <div className="">
        <h1 className="welcome-message">Hello{user.firstname ? `, ${user.firstname}` : ""} <Image src={WavingEmoji.src} height={34} width={34} /></h1>
        <p>Never put off tomorrow, what can be done today.</p>
      </div>
      <Button content="Add New Device" variant="blue" />
    </header>
  );
};

export default Header;
