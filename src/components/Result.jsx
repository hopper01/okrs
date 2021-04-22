import React, { useState } from "react";
import SubList from "./SubList";

const Result = ({ data, idx }) => {
  const [flag, setflag] = useState(false);
  const { title } = data;
  const handleClick = () => {
    setflag(!flag);
  };
  return (
    <>
      <div className="post">
        <div className="child">
          <button onClick={handleClick}>
            {flag ? (
              <i className="fas fa-caret-right"></i>
            ) : (
              <i className="fas fa-caret-down"></i>
            )}
          </button>
        </div>
        <div className="child profile">
          <i className="far fa-user-circle"></i>
        </div>
        <div className="child">
          <span className="num">{idx}.</span> <h2>{title}</h2>
        </div>
      </div>
      {flag ? <SubList data={data.sub} /> : <></>}
    </>
  );
};

export default Result;
