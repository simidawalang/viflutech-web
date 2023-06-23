import React, { ChangeEvent, FormEvent, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/input";
import Link from "next/link";
import AuthLayout from "../../components/pages/auth/Layout";
import { loginUser } from "../../helpers/auth";
import SecureLS from "secure-ls";
import { toast } from "react-toastify";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ls = new SecureLS();

  const router = useRouter();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const login = async (e: FormEvent) => {
    e.preventDefault();

    const res = await loginUser({
      email: email.trim(),
      password: password.trim(),
    });

    if (res) {
      ls.set("token", res.data.data.token);
      ls.set("user", res.data.data.user);

      toast.success("Logged in");

      setTimeout(() => {
        router.push("/app/dashboard");
      }, 1000);
    }

    console.log(res);
  };
  //abahernesto@gmail.com
  //P@ssw0rd1
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
