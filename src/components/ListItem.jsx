import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({
  className,
  title,
  id,
  children,
  hideChild,
  handleOnClick,
  type,
  hasChild,
}) => {
  return (
    <div className="list-item">
      {!hasChild ? (
        <div>
          <button onClick={handleOnClick}>{hideChild ? ">" : "v"}</button>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <i className="far fa-user-circle"></i>
      </div>
      <div className='list'> 
          <Link to={`/${id}/modal`}>
            <li>{title}</li>
          </Link>
      </div>
      {children}
    </div>
  );
};

export default ListItem;
