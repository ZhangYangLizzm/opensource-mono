import { StatusSetter, Status } from "../status";

interface TipProps extends StatusSetter {
  title: string;
  desc: string;
  buttonText: string;
}

const Tip = ({ setStatus, title, desc, buttonText }: TipProps) => {
  return (
    <div className="text-center flex flex-col gap-4">
      <div>
        <h2 className="text-white">{title}</h2>
        <p className="text-white text-opacity-70">{desc}</p>
      </div>
      <div className="flex justify-center">
        <div
          className="text-white border border-solid border-white py-2 px-8 font-bold cursor-pointer"
          onClick={() => setStatus?.(Status.SignUp)}
        >
          {buttonText}
        </div>
      </div>
    </div>
  );
};

const SignUpTip = ({ setStatus }: StatusSetter) => {
  return (
    <Tip
      title="Don't have an Account Yet?"
      desc="Let's get your all set up so you can creating your first onboarding
    experience."
      buttonText="SIGN UP"
      setStatus={() => setStatus(Status.SignUp)}
    />
  );
};

const LoginTip = ({ setStatus }: StatusSetter) => {
  return (
    <Tip
      title="Already Signed Up?"
      desc="Log in to your account so you can continue building and editing your
        onboarding flows."
      buttonText="LOGIN"
      setStatus={() => setStatus(Status.Login)}
    />
  );
};

export { SignUpTip, LoginTip };
