import { Steps } from "antd";
import { useRoutes } from "react-router-dom";
import { signupStepsItems } from "./constants";
import { signupRoutes } from "./route";

const Signup = () => {
  const routes = useRoutes(signupRoutes);

  return (
    <div
      style={{
        maxWidth: 1080,
        margin: "50px auto",
      }}
    >
      <Steps current={1} items={signupStepsItems} />

      {routes}
    </div>
  );
};

export default Signup;
