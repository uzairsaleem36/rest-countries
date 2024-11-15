import React from "react";
import { Link } from "react-router-dom";
import CountriesJson from "../data.json";

export default function Home({ query, region }) {
  const filteredCountries = CountriesJson.filter((country) => {
    const matchesRegion = region ? country.region === region : true;
    const matchesQuery = query ? country.name.toLowerCase().includes(query.toLowerCase()) : true;
    return matchesRegion && matchesQuery;
  });

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredCountries.map((country, index) => (
          <Link to={`/country-details/${country.name}`} key={index}>
            <div className="card shadow-xl px-3 border-[1px] p-4 rounded-lg cursor-pointer">
              <img
                className="h-48 w-full object-cover rounded-lg"
                src={country.flags.png}
                alt={country.name}
              />
              <div className="py-10 px-4 space-y-6">
                <h2 className="font-bold text-2xl ">{country.name}</h2>
                <p>{country.description}</p>
                <div className="card-sections">
                  <p>Capital: {country.capital}</p>
                  <p>Region: {country.region}</p>
                  <p>Population: {country.population}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}