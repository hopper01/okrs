import React from "react";
import {types } from "../redux/types.js";
import { connect } from "react-redux";

const Dropdown = (props) => {
  return (
    <div>
      <span>Select a category:&nbsp;</span>
      <select onChange={props.filterOkrs} id="dropdown">
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

const mapStateToProps = state => ({
    categories: state.categories
})

const mapDispatchToProps = dispatch => ({
    filterOkrs: (event) => dispatch({ type: types.FILTER_OKRS, category: event.target.value})
})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)