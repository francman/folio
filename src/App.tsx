import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home, Projects, Writings, Readings, Updates, Lab233} from "./pages";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/lab233" element={<Lab233 />} />
      </Routes>
    </>
  );
}

export default App;
