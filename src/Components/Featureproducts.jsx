import React, { useContext } from 'react'
import productContext from '../Context/ContextFile'
import Card from './Card'

const Featureproducts = () => {

    const data = useContext(productContext)

    // console.log(data.featureProducts)

    return (
        <>
            <div className="main_feature">
              <div className="feature_heading">
              <p>Check Out</p>
              <h2>Our Featured Products</h2>
              </div>
              <div className="products_feature">
              {
              data.featureProducts.map((value)=> 
              
              <Card
              key = {value.id}
              id = {value.id}
              name ={value.name} 
              img ={value.image}
              price ={ value.price}
              cat = {value.category}
              
              
              /> 
              )}

              </div>
            </div>
        </>)
}

export default Featureproducts