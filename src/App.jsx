import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom"; // useLocation import karein
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import Search from "./components/Search";
import Select from "./components/Select";

function App() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');
  const location = useLocation(); // current path ko check karne ke liye

  return (
    <>
      <Header />
      {/* Agar current path '/' ho toh Search aur Select dikhaye */}
      {location.pathname === '/' && (
        <div className="flex flex-col md:flex-row md:justify-between mt-4 px-8">
          <Search setQuery={setQuery} />
          <Select onRegionChange={setRegion} />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home query={query} region={region} />} />
        <Route path="/country-details/:countryName" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;