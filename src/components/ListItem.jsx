import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ className, title, id, children, hideChild, handleOnClick, type, hasChild }) => {
  return (
    <div className="list-item">
    {
      !hasChild ?
    
      <button onClick={handleOnClick}>{hideChild ? ">" : "v"}</button>:
      <div />
}
      <i className="far fa-user-circle"></i>
      <span>
        <Link to={`/${id}/modal`}>
          <li>{title}</li>
        </Link>
      </span>
      {children}
    </div>
  );
};

export default ListItem;
