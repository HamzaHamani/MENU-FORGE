function SigninComp() {
  return (
    <div className="bg-[#feffff] w-[50%] p-10 px-16 rounded-lg text-black">
      <div>
        <div className="bg-gray-400 w-14 h-14 mb-2 rounded-full">
          {/* img here */}
        </div>
        <h2 className="text-3xl mt-5 mb-1 text-black">Create an account</h2>
        <p className="text-sm text-black">
          Already have an account?{" "}
          <span className="underline cursor-pointer">Log in</span>
        </p>
      </div>
      <div className="mt-7">
        <form className="flex flex-col gap-4">
          <div className="flex gap-5  flex-1">
            <div className="flex-grow">
              <h4 className="text-sm text-gray-500">First Name</h4>
              <input
                type="text"
                className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg w-full  "
              />
            </div>
            <div className="flex-grow">
              <h4 className="text-sm text-gray-500">Last Name</h4>
              <input
                type="text"
                className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg w-full "
              />
            </div>
          </div>
          <div>
            <h4 className="text-sm text-gray-500"> Email</h4>
            <input
              type="email"
              className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg w-full"
            />
          </div>
          <div>
            <h4 className="text-sm text-gray-500"> Password</h4>
            <input
              type="password"
              className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg w-full"
            />
            <p className="text-gray-400 text-xs mt-1">
              Use 8 or more charachters with a mix of letters, numbers and
              symbols
            </p>
          </div>
          <div>
            <h4 className="text-sm text-gray-500"> Confirm Password</h4>
            <input
              type="password"
              className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg w-full"
            />
          </div>
          <button className="bg-[#2b7a78] text-lg text-white py-2 rounded-md">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninComp;
