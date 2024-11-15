import React from "react";

export default function Select({ onRegionChange }) {
  return (
    <select 
      className="select select-bordered max-w-xs focus:outline-none" 
      onChange={(e) => onRegionChange(e.target.value)} // Trigger onRegionChange on selection
    >
      <option disabled selected>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}