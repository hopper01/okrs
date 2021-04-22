import React from "react";

const SubList = ({ data }) => {
  return (
    <ol type="a" className="tree-list">
      {data.map((val, idx) => {
        return (
          <div className="tree" key={idx}>
            <i className="far fa-user-circle child-2"></i>
            <li className="child-2">
              <h2>{val.title}</h2>
            </li>
          </div>
        );
      })}
    </ol>
  );
};
export default SubList