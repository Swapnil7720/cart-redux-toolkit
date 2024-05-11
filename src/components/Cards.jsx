import React from "react";
import Products from "../data";
import { useDispatch } from "react-redux";
import { inc, dec, addToCart } from "../redux/features/AddNumb/NumberSlice";

const Cards = () => {

const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center mx-auto">
        <div className="col-10">
          <div className="row">
            {Products.map((item) => {
              return (
                <div key={item.id} className="class-12 col-md-6 col-lg-4 ">
                  <div className="card mx-auto my-3" style={{ width: "18rem" }}>
                    <img src={item.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title"> {item.title}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <button type="button" className="btn btn-primary mx-1">
                        {item.price}
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary"
                        
                        onClick={()=> dispatch(addToCart(item))}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
