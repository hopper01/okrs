import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/action.js";
import Dropdown from "./Dropdown";
import Okrs from "./Okrs";
import { filterOkrs } from "../utils/index"
import loader from "../assets/loader.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
  Link
} from "react-router-dom";

const Container = (props) => {
  const [Data, setData] = useState([])
  useEffect(() => {
    props.fetchData(); 
  });
  const handleChange = (e) => {
    const category = e.target.value;
    if (category === "select") {
      setData(null)
    }
    const data = filterOkrs(props.results,category)
    setData(data)
  }
  return (
    <div>
      {props.isLoading ? (
        <img src={loader} alt="loader" className="loader" />
      ) : (
        <div></div>
      )}
      {props.errorMesssage ? <div>{props.error}</div> : <div></div>}

      {
        <>
        <Router>
          <Dropdown cat={props.categories} handleChange={handleChange} />
          <Okrs data={Data} />
          </Router>
        </>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.fetchDataReducer.results,
    categories: state.fetchDataReducer.categories,
    loading: state.fetchDataReducer.loading,
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

export default connect(mapStateToProps, mapDispatchToProps)(Container);
