import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header flex justify-between p-6 px-36 lg:px-16 mb-9 xs:justify-center">
        <div>
          <img src="./assets/logo.png" />
        </div>
        <ul className="flex gap-4 items-center text-lg cursor-pointer lg:hidden ">
          <li>
            <Link>Home</Link>{" "}
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
