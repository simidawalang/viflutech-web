import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/input";
import authImg from "../../assets/auth-img.svg";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <div className="auth-page">
            <div className="auth-page__placeholder">
        <div>
          <Image src={authImg} alt="image placeholder" />
          <h3 className="auth-page__placeholder-heading">Real Time Updates</h3>
          <p>
            Get real time updates on your fluid like temperature, level and
            device runtime at any time.
          </p>
        </div>
      </div>
      <div className="auth-page__form-container">
        <form className="auth-page__form">
          <div className="auth-page__form-inputs">
            <h3 className="auth-page__form-header">Sign In</h3>
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
          </div>
          <Button content="Log in" variant="blue" />
          <p className="auth-page__form-link">
            Don&apos;t have an account? <Link href="/auth/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
