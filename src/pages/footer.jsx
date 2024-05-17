function Footer() {
  return (
    <footer className=" bottom-0 -z-30 h-screen text-[#e2e1e1]">
      <div className="bg-secondary2 p-6">
        <p className="text-center text-black underline ">
          Discover whats new every month at menuforge.com
        </p>
      </div>
      <section className="bac relative h-[93%] overflow-hidden bg-primary">
        <div className="flex justify-between p-14">
          <div className="flex flex-col gap-7">
            <img src="../../public/logoWhite.png" width={100} />

            <p className="font-medium text-accent">
              @2024{" "}
              <a href="#" className="cursor-pointer underline">
                MenuForge
              </a>
              . All rights reserved.{" "}
            </p>
          </div>
          <div className="flex justify-end gap-10">
            <div className="flex w-[35%] flex-col gap-8">
              <h3 className="w-fit text-lg font-bold text-accent ">About</h3>
              <p className=" text-sm">
                Menu Forge lets restaurants create and showcase digital menus
                with ease.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="text-lg font-bold text-accent">Social</h3>
              <ul className="flex  flex-col gap-4">
                <li className="cursor-pointer">
                  <a href="#">Instagram</a>{" "}
                </li>
                <li className="cursor-pointer">
                  <a href="#">Linkedin</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-[10000px] flex-col  overflow-hidden bg-yellow-50 text-secondary2">
          <div className=" absolute -bottom-10  -ml-3 text-[18rem] font-bold capitalize">
            <p className="font-spacemono absolute -top-10 left-56 text-center text-[6rem] font-semibold uppercase tracking-[0.5em] ">
              {" "}
              Dont waste the{" "}
            </p>

            <span className="font-spacemono ">opportunity</span>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
