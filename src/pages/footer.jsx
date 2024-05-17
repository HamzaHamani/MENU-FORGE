function Footer() {
  return (
    <footer className="h-screen">
      <div className="mt-2  p-10"></div>
      <div className="bg-secondary2 p-6">
        <p className="text-center underline ">
          Discover whats new every month at menuforge.com
        </p>
      </div>
      <section className="relative h-[88%] overflow-hidden bg-primary">
        <div className="flex justify-between p-14">
          <div className="flex flex-col gap-7">
            <img src="../../public/logoWhite.png" width={100} />

            <p className="text-primaryLighter font-medium">
              Copyright @2024
              <a href="#" className="underline">
                MenuForge
              </a>{" "}
            </p>
            <p className="text-white">Terms of Service</p>
          </div>
          <div className="flex justify-around gap-28">
            <div>
              <h3 className="text-primaryLighter font-medium">Company</h3>
            </div>
            <div>
              <h3 className="text-primaryLighter font-medium">Customer</h3>
            </div>
          </div>
        </div>
        <div className="flex w-[10000px] flex-col  overflow-hidden bg-yellow-50 text-secondary2">
          <div className=" absolute -bottom-10  -ml-3 text-[18rem] font-bold capitalize">
            <p className="font-spacemono absolute -top-10 left-52 text-[6rem] font-semibold uppercase tracking-[0.5em]">
              {" "}
              Dont waste the{" "}
            </p>

            <span className="font-spacemono text-primaryLighter">
              opportunity
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
