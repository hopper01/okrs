import React from "react";

const List = ({ type, children }) => {
  const t = type === "parent" ? "1" : "a";
  return (
    <div>
      <ol className={type} type={t}>
        {children}
      </ol>
    </div>
  );
};

export default List;
