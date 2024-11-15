import React from "react";

export default function Search({setQuery}) {

  
  return (
    <div className="relative mb-4 w-full max-w-xs">
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search..."
        className="input input-bordered focus:outline-none w-full pr-10"
      />
    </div>
  );
}