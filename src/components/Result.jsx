import React from "react";

const Result = (props) => {
 const { id, title} = props.data;
  return (
    <div className="post">
      <small>{id}</small>
      <h4>{title}</h4>
    </div>
  );
};

export default Result;
