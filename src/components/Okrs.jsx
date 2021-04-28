import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import List from "./List";
import Modal from "./Modal";
import { Route, useHistory } from "react-router-dom";
import { isEmpty } from "../utils/index.js";
import loader from "../assets/loader.svg";

const Okrs = (props) => {
  const [results, setresults] = useState([]);
  const history = useHistory();
  const handleModalClick = () => {
    history.push("/");
  };
  useEffect(() => {
    setresults(props.data);
  }, [props.data]);
  const handleOnClick = (id) => {
    // toggle sublist
    // toggle only if it has children
    let index = results.findIndex((obj) => obj.id === id);
    if (!isEmpty(results[index].children)) {
        let arr = [...results];
    arr[index].hideChild = !results[index].hideChild;
    setresults(arr);
    }
  };
  return (
    <>
      {results ? (
        <List type="parent">
          {results.map((val, idx) => {
            return (
              <div key={val.id} >
              <ListItem title={val.title} id={val.id} handleOnClick={() => handleOnClick(val.id)} hideChild={val.hideChild} hasChild={isEmpty(val.children)}/>
                <Route
                  path={`/${val.id}/modal`}
                  render={() => (
                    <Modal onClick={handleModalClick} title={val.title} />
                  )}
                />
                { !isEmpty(val.children) && !val.hideChild ? (
                  <List type="child">
                    {val.children ? (
                      val.children.map((value, index) => {
                        return (
                          <>
                            <ListItem
                             title={value.title} id={value.id} handleOnClick={() => handleOnClick(value.id)} hideChild={value.hideChild} hasChild={isEmpty(value.children)}
                            />
                            <Route
                              path={`/${value.id}/modal`}
                              render={() => (
                                <Modal
                                  onClick={handleModalClick}
                                  title={value.title}
                                />
                              )}
                            />
                          </>
                        );
                      })
                    ) : (
                      <div />
                    )}
                  </List>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </List>
      ) : (
        <><img src={loader} alt="loader" className="loader" /></>
      )}
    </>
  );
};

export default Okrs;
