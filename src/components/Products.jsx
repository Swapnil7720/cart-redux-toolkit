import React from 'react'
import Products from '../data'

const Products = () => {
  return (
    <div className='row'>

        {
            Products.map((item)=>{
                return(
                    <div className="class-12 col-md-6 col-lg-4">

                    <div className="card" style="width: 18rem;">
                    <img src={item.imgSrc} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>

                     </div>  /* end of col */
                )
            })
        }
        

    </div>
  )
}

export default Products