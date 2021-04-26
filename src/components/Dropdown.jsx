import React from "react";

const Dropdown = (props) => {
  return (
    <div>
      <span>Select a category:&nbsp;</span>
      <select onChange={props.handleChange} id="dropdown">
        <option value="select">--select--</option>
        <option value="" key="all">
          All
        </option>
        {props.cat ? (
          [...props.cat].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        ) : (
          <div></div>
        )}
      </select>
    </div>
  );
};

export default Dropdown;
