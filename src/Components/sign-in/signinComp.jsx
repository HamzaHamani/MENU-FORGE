function SigninComp() {
  return (
    <div className="bg-white w-[50%] p-6">
      <div>
        <div className="bg-gray-400 w-14 h-14 mb-2 rounded-full">
          {/* img here */}
        </div>
        <h2 className="text-3xl mb-1 text-black">Create an account</h2>
        <p className="text-sm text-black">
          Already have an account?{" "}
          <span className="underline cursor-pointer">Log in</span>
        </p>
      </div>
      <div className="mt-7">
        <form className="flex flex-col gap-4">
          <div className="flex gap-5">
            <div>
              <h4 className="text-sm text-gray-500">First Name</h4>
              <input
                type="text"
                className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-sm text-gray-500">First Name</h4>
              <input
                type="text"
                className="bg-gray-100/10 p-3 border border-gray-200 rounded-lg"
              />
            </div>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border-b-2 border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 border-gray-300"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-b-2 border-gray-300"
          />
          <button className="bg-[#FF8C00] text-white py-2 rounded-md">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninComp;
