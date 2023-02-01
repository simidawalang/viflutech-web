import React from "react";
import type { NextPage } from "next";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/input";
import Link from "next/link";
import AuthLayout from "../../components/pages/auth/Layout";

const Login: NextPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__form-container">
        <form className="auth-page__form">
          <div className="auth-page__form-inputs">
            <h2 className="auth-page__form-heading">Welcome Back</h2>
            <h3 className="auth-page__form-subheading">
              Login to your account
            </h3>
            <Input label="Email" type="email" placeholder="Email Address" />
            <Input label="Password" type="password" placeholder="Password" />
          </div>
          <Button content="Log in" variant="blue" />
          <p className="auth-page__form-link">
            Don&apos;t have an account? <Link href="/auth/signup">Sign Up</Link>
          </p>
        </form>
      </div>
      <AuthLayout />
    </div>
  );
};

export default Login;
