import Image from "next/image";
import { SpinnerIcon } from "../../../assets";

const LoadingSpinner = () => {
  return <Image src={SpinnerIcon.src} alt="loading" height={40} width={40} />;
};

export default LoadingSpinner;
