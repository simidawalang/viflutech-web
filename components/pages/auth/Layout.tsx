import React from "react";
import Image from "next/image";
import authImg from "../../../assets/auth_img.svg";

const AuthLayout = () => {
    return <div className="auth-page__placeholder">
    <div>
      <Image src={authImg} alt="image placeholder" />
      <h3 className="auth-page__placeholder-header">
        Monitor your Fluid with Ease
      </h3>
      <p>
        Get real time updates like temperature, level and Runtime. Find out
        if your fluid is adulterated early enough to avoid Engine breakdown.
      </p>
    </div>
  </div>
};

export default AuthLayout;