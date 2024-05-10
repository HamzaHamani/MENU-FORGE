function SignupComp() {
  return (
    <div className="mt-8 bg-[#feffff] w-[40%] p-20 px-16 rounded-lg text-black lg:w-[70%] md:w-[80%] xs:w-[88%] xs:p-8 xs:px-9 xs:mt-6">
      <div>
        <div className="bg-gray-400 w-14 h-14 mb-2 rounded-full">
          {/* img here */}
        </div>
        <h2 className="text-3xl mt-5 mb-1 text-black lg:text-2xl xss:text-xl ">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-7">
        <form className="flex flex-col gap-4">
          <div>
            <h4 className="text-sm xs:text-xs text-gray-500"> Email</h4>
            <input
              type="email"
              className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg w-full  xs:p-2"
            />
          </div>
          <div>
            <h4 className="text-sm xs:text-xs text-gray-500"> Password</h4>
            <input
              type="password"
              className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg w-full  xs:p-2"
            />
            <p className="text-gray-400 text-xs xs:text-xs mt-1 xss:text-[10px]">
              Use 8 or more charachters with a mix of letters, numbers and
              symbols
            </p>
          </div>

          <button className="bg-[#2b7a78] text-lg text-white xs:text-base py-2 rounded-md ">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupComp;
