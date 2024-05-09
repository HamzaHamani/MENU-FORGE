import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header flex justify-between p-6 px-36 mb-9">
        <h1 className="text-4xl tracking-widest">Restaur</h1>
        <ul className="flex gap-4 items-center text-lg cursor-pointer">
          <li>Home</li>
          <li>Sign in</li>
          <li>Sign up</li>
          <button className="bg-[#2b7a78] text-lg px-6 py-3 rounded-lg">
            Start now
          </button>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
