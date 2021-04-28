import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/action.js";
import Dropdown from "./Dropdown";
import Okrs from "./Okrs";
import loader from "../assets/loader.svg";
import { BrowserRouter as Router } from "react-router-dom";

class Container extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
        {
          <>
            <Router>
              <Dropdown cat={this.props.categories} />
              {this.props.isLoading ? (
                <img src={loader} alt="loader" className="loader" />
              ) : this.props.errorMesssage ? (
                <div>{this.props.error}</div>
              ) : (
                (<Okrs data={this.props.filteredOkrs} />)
              )}
            </Router>
          </>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredOkrs: state.fetchDataReducer.filteredOkrs,
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
