import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Covid19 from "./pages/Covid19";
import Indonesia from "./pages/Indonesia";
import DetailsCovid19 from "./pages/DetailsCovid19";
import "../src/styles/App.css";
import Saved from "./pages/Saved";
import DetailsIndo from "./pages/DetailsIndo";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/covid19" element={<Covid19 />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/detailscovid/:index" element={<DetailsCovid19 />} />
        <Route path="/detailsindo/:index" element={<DetailsIndo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
