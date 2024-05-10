import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="App-header flex justify-between p-6 px-36 lg:px-16 mb-9 xs:justify-center">
      <div className="">
        <img src="../public/logoS.png" width={250} height={150} />
      </div>
      <ul className="flex gap-4 items-center text-lg cursor-pointer lg:hidden ">
        <li>
          <Link to={"./"}>Home</Link>{" "}
        </li>
        <li>
          <Link to={"/signin"}>Sign in</Link>
        </li>
        <li>
          <Link to={"/signup"}>Sign up</Link>
        </li>
        <button className="bg-secondary2 hover:bg-primary transition-all text-white text-lg px-6 py-3 rounded-lg">
          <Link to={"/signup"}>Start now</Link>
        </button>
      </ul>
    </header>
  );
}

export default Navbar;
