import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import AuthLayout from "../../components/pages/auth/Layout";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/input";


const Signup: NextPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__form-container">
        <form className="auth-page__form">
          <h2 className="auth-page__form-heading">Get Started</h2>
          <h3 className="auth-page__form-subheading">Create a new account</h3>
          <div className="auth-page__form-inputs">
            <Input label="Full Name" type="text" placeholder="Full Name" />
            <Input label="Email" type="email" placeholder="Email Address" />
            <Input label="Password" type="password" placeholder="Password" />
          </div>
          <Button content="Log in" variant="blue" />
          <p className="auth-page__form-link">
            Already have an account? <Link href="/auth/login">Log in</Link>
          </p>
        </form>
      </div>
      <AuthLayout />
    </div>
  );
};

export default Signup;
