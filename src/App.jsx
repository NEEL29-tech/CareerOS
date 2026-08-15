import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import Modules from "./Pages/Modules/Modules";
import DSA from "./Pages/Modules/DSA/DSA";
import Aptitude from "./Pages/Modules/Aptitude/Aptitude";
import Reasoning from "./Pages/Modules/Reasoning/Reasoning";
import Hackathons from "./Pages/Modules/Hackathons/Hackathons";

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