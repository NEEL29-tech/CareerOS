import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import Modules from "./pages/Modules/Modules";
import DSA from "./pages/Modules/DSA/DSA";
import Aptitude from "./pages/Modules/Aptitude/Aptitude";
import Reasoning from "./pages/Modules/Reasoning/Reasoning";
import Hackathons from "./pages/modules/Hackathons/Hackathons";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/modules" element={<Modules />} />

        <Route path="/modules/dsa" element={<DSA />} />

        <Route path="/modules/aptitude" element={<Aptitude />} />

        <Route
          path="/modules/reasoning"
          element={<Reasoning />}
        />

        <Route
          path="/modules/hackathons"
          element={<Hackathons />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;