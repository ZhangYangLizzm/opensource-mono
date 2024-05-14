import { ConfigProvider } from "antd";
import { useState } from "react";
import { Status } from "./status";
import { useScreen } from "@/hooks/useScreen";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { SignUpTip, LoginTip } from "./components/Tip";

const Login = () => {
  const [status, setStatus] = useState<Status>(Status.Login);

  const isLoginForm = status === Status.Login;

  const { isMobile } = useScreen();

  return (
    <ConfigProvider
      componentSize="large"
      theme={{ components: { Button: { borderRadius: 0 } } }}
    >
      <div className="w-full h-full flex justify-between items-center p-4 box-border relative">
        <h2
          className={`left-4 top-4 absolute z-10
            ${isLoginForm ? "text-primary" : "text-white"}`}
        >
          React
        </h2>

        {isMobile ? (
          <LoginForm />
        ) : (
          <>
            <div
              className={`flex items-center justify-center bg-white basis-1/2 transition-all absolute top-0 h-full w-1/2 ${isLoginForm ? "left-0" : "left-1/2"}`}
            >
              {isLoginForm ? (
                <LoginForm />
              ) : (
                <SignUpForm setStatus={(status) => setStatus(status)} />
              )}
            </div>
            <div
              className={`basis-1/2 bg-primary flex transition-all absolute top-0 h-full w-1/2 ${!isLoginForm ? "right-1/2" : "right-0"}`}
            >
              <div
                className={
                  `box-border border-0 w-0 h-0 lg:border-r-[200px] md:border-r-[100px] border-solid border-r-transparent ` +
                  (isLoginForm
                    ? "order-1 border-b-[100vh] border-b-white bg-primary"
                    : "order-2 border-t-[100vh] border-t-primary bg-white")
                }
              />
              <div
                className={`flex items-center justify-center flex-grow ${isLoginForm ? "order-2" : "order-1"}`}
              >
                {isLoginForm ? (
                  <SignUpTip setStatus={(status) => setStatus(status)} />
                ) : (
                  <LoginTip setStatus={(status) => setStatus(status)} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </ConfigProvider>
  );
};

export default Login;
