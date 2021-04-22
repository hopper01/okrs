import React, { useState, useEffect } from "react";
import { category } from "../utils/index.js";
import { connect } from "react-redux";
import { fetchData } from "../redux/action.js";
import Pagination from "./Pagination.jsx";
import Result from "./Result";

const App = (props) => {
  const [displayData, setdisplayData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(category[0]);
  const [error] = useState("");
  const { results } = props;
  useEffect(() => {
    handleFetchData();
  });
  const handleFetchData = () => {
    props.fetchData();
  };
  const filterData = (event) => {
    const category = event.target.value;
    setSelectedOption(category);
    let categorizedData = results.filter((d) => d.category === category);
    // filter by parent_objective_id
    let a = categorizedData.filter((d) => d.parent_objective_id === "" || null);
    a.forEach((ele) => (ele.sub = []));
    let b = categorizedData.filter((d) => d.parent_objective_id !== "" || null);
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (b[j].parent_objective_id === a[i].id) {
          a[i].sub.push(b[j]);
        }
      }
    }
    setdisplayData(a);
  };
  if (error)
    return (
      <div className="error-notice">
        <div className="error danger">
          <strong>Error</strong>
          Please try again.
        </div>
      </div>
    );
  return (
    <div className='wrapper'>
      <div class="e">
        <h1>OKR<small>s</small></h1>
      </div>

      <div className="select">
        <div>
          <label htmlFor="category">Choose a Category:</label>
        </div>
        <div>
          <select
            name="category"
            id="category"
            onChange={filterData}
            value={selectedOption}
          >
            {category.map((val, id) => {
              return (
                <option value={val} key={id}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        </div>
        {displayData.length > 0 ? (
          <>
            <Pagination
              data={displayData}
              RenderComponent={Result}
              title="Results"
              pageLimit={2}
              dataLimit={10}
            />
          </>
        ) : (
          <div class="info-msg">
            <i class="fa fa-info-circle"></i>
            No Results Available
          </div>
        )}
      </div>
  );
};
const mapStateToProps = (state) => {
  return {
    results: state.fetchDataReducer.results,
    error: state.fetchDataReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
