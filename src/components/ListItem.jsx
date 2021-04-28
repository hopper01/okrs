import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ className, title, id, children }) => {
  return (
    <div className="list-item">
      <i className="far fa-user-circle"></i>
      <span>
        <Link to={`/modal/${id}`}>
          <li>{title}</li>
        </Link>
      </span>
      {children}
    </div>
  );
};

export default ListItem;
