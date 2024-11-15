import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CountriesJson from "../data.json"; // JSON file import karein

export default function CountryDetails() {
  const { countryName } = useParams(); // URL se country name lein
  const navigate = useNavigate(); // Navigation hook

  const country = CountriesJson.find((c) => c.name === countryName); // JSON mein se country find karein

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
      <div>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="flex w-min my-5 items-center gap-2 shadow-lg shadow-custom py-2 px-5 rounded-lg border-[1px]"
        >
          <span>Back</span>
        </button>

        {/* Country Flag */}
        <img 
          src={country.flag} 
          alt={`Flag of ${country.name}`} // Dynamic alt text
          className="w-full h-auto"
        />
      </div>

      <div className="flex md:justify-center">
        <div className="flex flex-col justify-evenly black:text-white">
          <h1 className="font-bold text-3xl mb-4">{country.name}</h1>
          <div className="flex flex-col md:flex-row justify-between w-full gap-12 md:gap-32">
            <div className="flex flex-col gap-1">
              <h3>
                <strong className="font-semibold">Native Name:</strong>{" "}
                {country.nativeName}
              </h3>
              <h3>
                <strong className="font-semibold">Population:</strong>{" "}
                {country.population}
              </h3>
              <h3>
                <strong className="font-semibold">Region:</strong>{" "}
                {country.region}
              </h3>
              <h3>
                <strong className="font-semibold">Sub Region:</strong>{" "}
                {country.subregion}
              </h3>
              <h3>
                <strong className="font-semibold">Capital:</strong>{" "}
                {country.capital}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h3>
                <strong className="font-semibold">Top Level Domain:</strong>{" "}
                {country.topLevelDomain[0]}
              </h3>
              <h3>
                <strong className="font-semibold">Currencies:</strong>{" "}
                {country.currencies.length > 0
                  ? country.currencies[0].name
                  : "N/A"}
              </h3>
              <h3>
                <strong className="font-semibold">Languages:</strong>{" "}
                {country.languages.length > 0
                  ? country.languages.map((language) => language.name).join(", ")
                  : "N/A"}
              </h3>
            </div>
          </div>
          <div className="flex gap-4 mt-7 flex-col md:flex-row md:items-center">
            <h3>
              <strong className="font-semibold">
                {country.borders && "Border Countries:"}
              </strong>
            </h3>
            <ul className="flex gap-2 flex-wrap">
              {country.borders &&
                country.borders.length > 0 &&
                country.borders.map((border) => (
                  <li
                    className="bg-black rounded-lg text-white px-[10px] shadow-lg "
                    key={border}
                  >
                    {border}
                  </li>
                ))}
              {(!country.borders || country.borders.length === 0) && (
                <li className="bg-white px-[10px] py-1 shadow-lg">
                  No border countries
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}