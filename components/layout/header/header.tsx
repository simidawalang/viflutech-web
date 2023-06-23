import React, { useEffect, useState } from "react";
import SecureLS from "secure-ls";
import Button from "../../ui/button/Button";

const Header = () => {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const ls = new SecureLS();
    setUser(ls.get("user"));
  }, []);

  return (
    <header className="dashboard-header">
      <div className="main-app_body">
        <h1>Hello{user? `, ${user.firstname}`: ""}</h1>
        <p>Never put off tomorrow, what can be done today.</p>
      </div>
      <Button content="Add New Device" variant="blue" />
    </header>
  );
};

export default Header;
