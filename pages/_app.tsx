import "../styles/styles.scss";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "../components/layout/navbar/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
    <ToastContainer />
      <div className="app-layout">
        {pathname.includes("app") && <Navbar />}
        <main className={pathname.includes("app") ? "main-app__body" : ""}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
// "main-app__body";
