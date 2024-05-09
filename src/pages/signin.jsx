import LeftSigninComp from "../Components/sign-in/leftSigninComp";
import SigninComp from "../Components/sign-in/signinComp";

function Signin() {
  return (
    <div className="h-screen bg-[#1F1F1F]">
      <div className="flex  gap-36 w-[1700px]  m-auto">
        <LeftSigninComp />
        <SigninComp />
      </div>
    </div>
  );
}

export default Signin;
