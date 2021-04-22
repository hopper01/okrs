import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, category } from "../utils/index.js";
import Pagination from "./Pagination.jsx";
import Result from "./Result";

const App = () => {
  const [data, setdata] = useState([]);
  const [displayData, setdisplayData] = useState([])
  const [selectedOption, setSelectedOption] = useState(category[0]);
  const [error, seterror] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await axios({
        method: "get",
        url: BASE_URL,
        json: true,
      });
      const load = response.data.data;
      setdata(load);
    } catch (err) {
      seterror(err);
    }
  };
  const filterData = (event) => {
    const category = event.target.value;
    setSelectedOption(category);
    let categorizedData = data.filter((d) => d.category === category);
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
    console.log(a);
    setdisplayData(a);
  };
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <label htmlFor="category">Choose a Category:</label> <br />
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
      {displayData.length > 0 ? (
        <>
          <Pagination
            data={displayData}
            RenderComponent={Result}
            title="Results"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
        <h1>No Results to display</h1>
      )}
    </div>
  );
};

export default App;
