import React, { ChangeEvent, FormEvent, useState } from "react";
import type { NextPage } from "next";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/input";
import Link from "next/link";
import AuthLayout from "../../components/pages/auth/Layout";
import { loginUser } from "../../helpers/auth";
import { baseUrl } from "../../constants";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const login = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    console.log(res);
  };
  return (
    <div className="auth-page">
      <div className="auth-page__form-container">
        <form className="auth-page__form" onSubmit={login}>
          <div className="auth-page__form-inputs">
            <h2 className="auth-page__form-heading">Welcome Back</h2>
            <h3 className="auth-page__form-subheading">
              Login to your account
            </h3>
            <Input
              label="Email"
              type="email"
              placeholder="Email Address"
              onChange={handleEmailChange}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
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
