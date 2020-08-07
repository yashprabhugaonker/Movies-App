import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="input-group flex-nowrap">
      <input
        type="text"
        name="query"
        className="form-control my-3"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
