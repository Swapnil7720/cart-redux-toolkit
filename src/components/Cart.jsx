import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/features/AddNumb/NumberSlice";

const Cart = () => {
  const cartItem = useSelector((state) => state.number.items);
  const dispatch = useDispatch();

  return (
    <div className="row mx-auto justify-content-center align-items- center">

      <div className="col-10">
        <div className="row justify-content-center">   
          {cartItem.map((item) => {
            return (
              <div key={item.id} className="col-9">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text"> Price : {item.price}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {item.description}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-2 ">
        <button
          type="button"
          onClick={() => dispatch(clearCart())}
          className="btn btn-danger"
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
