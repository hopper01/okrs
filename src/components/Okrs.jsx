import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import List from "./List";
import Modal from "./Modal";
import { Route, useHistory } from "react-router-dom";

const Okrs = (props) => {
  const [results, setresults] = useState([]);
  const [flag, setflag] = useState(false);
  const history = useHistory();
  const handleModalClick = () => {
    history.push("/");
  };
  useEffect(() => {
    setresults(props.data);
  }, [props.data]);
  const handleOnClick = (id) => {
    // toggle sublist
    setflag(!flag);
    let arr = [...results];
    let index = results.findIndex((obj) => obj.id === id);
    arr[index].hideChild = !results[index].hideChild;
    setresults(arr);
  };
  return (
    <div>
      {results ? (
        <List type="parent">
          {results.map((val, idx) => {
            return (
              <div key={val.id}>
                <button onClick={() => handleOnClick(val.id)}>
                  {flag ? ">" : "v"}
                </button>
                <ListItem title={val.title} id={val.id} />
                <Route
                  path={`/modal/${val.id}`}
                  render={() => (
                    <Modal onClick={handleModalClick} title={val.title} />
                  )}
                />
                {!val.hideChild ? (
                  <List type="child">
                    {val.children ? (
                      val.children.map((value, index) => {
                        return (
                          <>
                            <ListItem
                              title={value.title}
                              key={index}
                              id={val.id}
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
                  <div />
                )}
              </div>
            );
          })}
        </List>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Okrs;
