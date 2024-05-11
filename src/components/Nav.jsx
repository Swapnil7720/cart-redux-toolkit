import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Nav = () => {

  const numb = useSelector((state)=> state.number.items)

  return (
    <>
      <div className="row justify-content-center align-items-center text-bg-primary overflow-hidden mx-auto py-3 sticky-top navbar navbar-expand-lg">
        <div className="col-4 text-center">
          <h3> <Link className="link" to='/'> Tech Store </Link>  </h3>
        </div>

        <div className="col-4 text-center">
          <button type="button" className="btn btn-warning">
            Total Price = 0
          </button>
        </div>
        <div className="col-4 text-center">


          <button type="button" className="btn btn-primary position-relative">
             <Link className="link" to='/cart'> Inbox</Link>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {numb.length}
              <span className="visually-hidden">  unread messages  </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
