import LeftSigninComp from "../Components/sign-in/leftSigninComp";
import SigninComp from "../Components/sign-in/signinComp";

function Signin() {
  return (
    <div className="">
      <div className="flex  gap-36   mx-auto justify-evenly">
        {/* <LeftSigninComp /> */}
        <SigninComp />
      </div>
    </div>
  );
}

export default Signin;
