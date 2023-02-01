import "../styles/styles.scss";
import { Fragment } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "../components/layout/navbar/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <div className="app-layout">
      {pathname.includes("app") && <Navbar />}
      <main className={pathname.includes("app") ? "main-app__body" : ""}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
// "main-app__body";
