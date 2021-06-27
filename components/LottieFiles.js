import Lottie from "react-lottie";
import animationData from "../public/google.json";

function LottieFiles() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={150} width={400} />;
}

export default LottieFiles;
