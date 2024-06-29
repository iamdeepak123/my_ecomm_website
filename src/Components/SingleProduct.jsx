import React, { useContext, useEffect } from 'react'
import productContext from '../Context/ContextFile'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import BoltIcon from '@mui/icons-material/Bolt';
import Myimage from "./Myimage";
import Cart from "./Cart";

const SingleProduct = () => {

  const { getSingleProduct, singleProduct } = useContext(productContext);

  const { id } = useParams();

  const {
    name,
    company,
    price,
    description,
    category,
    reviews,
    stars,
    stock,
    image
  } = singleProduct;

  const API = "https://api.pujakaitem.com/api/products";

  useEffect(() => {

    getSingleProduct(`${API}?id=${id}`);

  }, []);

  return (
    <>

      <div className="single_product_div">
        <div className="singleproduct_heading">
          <p><Link to="/">Home</Link> / {name}</p>
        </div>

        <div className="singleproduct_data">


          <div className="singleproduct_images_section">
            <Myimage imgs={image} />

          </div>
          <div className="singleproduct_Description_section">
            <h2>{name}</h2>
            <p>MRP: Rs <del><b>{price + 10000}/- </b></del></p>
            <p>Deal of the Day: Rs<b> {price}/- </b> </p>
            <p>Rating:<b> {stars}/5 </b>  (<b>{reviews}</b> People review this) </p>
            <p>{description}</p>

            <div className="singleproduct_icons">
              <div><LocalShippingIcon />
                <p>Free Delivery</p>
              </div>
              <div><SecurityIcon />
                <p>Secure Services</p>
              </div>
              <div><PublishedWithChangesIcon />
                <p>30 Days Replacement</p>
              </div>
              <div><BoltIcon />
                <p>Fast Delivery</p>
              </div>

            </div>
            <hr />
            <p>Available: {stock > 0 ? <b>In Stock</b> : <b>Not Available</b>}</p>
            <p>ID: <b>{id}</b></p>
            <p>Brand: <b>{company}</b></p>
            <p>Category: <b>{category}</b></p>
            <hr />

            {stock > 0 && <Cart product = { singleProduct} />}

          </div>


        </div>


      </div>


    </>

  )
}

export default SingleProduct