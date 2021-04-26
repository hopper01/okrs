import React from "react";

const ListItem = ({ className, title, children }) => {
  return (
    <div className={className}>
      <i className="far fa-user-circle"></i>
      <span>
        <li>{title}</li>
      </span>
      {children}
    </div>
  );
};

export default ListItem;
