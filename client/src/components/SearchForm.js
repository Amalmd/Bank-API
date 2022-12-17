import React, { useState } from "react";

export default function SearchForm({ callback }) {
  const [searchTerm, setSearchTerm] = useState("");

  const getHandler = (e) => {
    if (e.type === "keydown" && e.code !== "Enter") return;
    callback(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <div className="form">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          onKeyDown={getHandler}
        />
        <button onClick={getHandler}>Get User</button>
      </div>
    </div>
  );
}
