import React, { useContext, useEffect, useState } from 'react'
import productContext from '../Context/ContextFile'
import Card from "./Card"
import WindowIcon from '@mui/icons-material/Window';
import ReorderIcon from '@mui/icons-material/Reorder';
import CardListView from './CardListView';
const Products = () => {

  const {products} = useContext(productContext)

  const [view, setView] = useState(true)
  const [sort, setSort] = useState(products)
  const [total, setTotal] = useState(products.length)
  const [name, setName] = useState("")
  const [filter, setFilter] = useState("")
  const [range, setRange] = useState("60000")

  const sorting = () => {

    let userSortvalue = document.getElementById("sort");
    let sort_value = userSortvalue.options[userSortvalue.selectedIndex].value;

    setFilter(sort_value);
    console.log(sort_value);
  }

  useEffect(() => {


    if (filter === "high") {
      setSort(products.sort((a, b) => a.price - b.price))
    }
    else if (filter === "low") {
      setSort(products.sort((a, b) => b.price - a.price))
    } else setSort(products);


  }, [filter]);

  useEffect(() => {
    setSort(products)
    setTotal(products.length)

  }, [products])

  const priceChange = (e) => {

    setRange(e.target.value);

    setSort(products.filter((ele) => { return ele.price / 100 <= range }))
    setTotal(products.filter((ele) => { return ele.price / 100 <= range }).length)

  }

  return (
    <>
      <div className="product_main_div">

        <div className="product_serchbar">
          <input type="text" placeholder='Search..' onChange={(e) => setName(e.target.value)} value={name} required />
          <button className="p_search_btn" onClick={() => {
            if (name === "") return
            setSort(products.filter((ele) => { return ele.category.toUpperCase() === name.toUpperCase() || ele.name.toUpperCase() === name.toUpperCase() || ele.company.toUpperCase() === name.toUpperCase() }));
            setTotal(products.filter((ele) => { return ele.category.toUpperCase() === name.toUpperCase() || ele.name.toUpperCase() === name.toUpperCase() || ele.company.toUpperCase() === name.toUpperCase() }).length)
          }}

          >Search</button>

          <h3>Category</h3>
          <p onClick={() => { setSort(products); setTotal(products.length) }}> All </p>
          <p onClick={() => { setSort(products.filter((ele) => { return ele.category === "mobile" })); setTotal(products.filter((ele) => { return ele.category === "mobile" }).length) }}>Mobile</p>
          <p onClick={() => { setSort(products.filter((ele) => { return ele.category === "laptop" })); setTotal(products.filter((ele) => { return ele.category === "laptop" }).length) }}>Laptop</p>
          <p onClick={() => { setSort(products.filter((ele) => { return ele.category === "computer" })); setTotal(products.filter((ele) => { return ele.category === "computer" }).length) }}>Computer</p>
          <p onClick={() => { setSort(products.filter((ele) => { return ele.category === "accessories" })); setTotal(products.filter((ele) => { return ele.category === "accessories" }).length) }}>Accessories</p>
          <p onClick={() => { setSort(products.filter((ele) => { return ele.category === "watch" })); setTotal(products.filter((ele) => { return ele.category === "watch" }).length) }}>Watch</p>

          <h3>Company</h3>
          <select>
            <option value="">All</option>
          </select>
          <h3>Price</h3>
          <p>Price: &#8377;{range}</p>
          <input className="range" type="range" min="0" max="60000" value={range} name='price' step="100" onChange={priceChange} />
          <div><button className='clearall_btn' onClick={() => { setSort(products); setTotal(products.length); setName(""); setRange("60000") }}>ClearAll Filter</button></div>
        </div>
        <div className="products_list">
          <div className="sort_view">
            <div className='sort_icons'>
              <WindowIcon style={{ backgroundColor: view ? "blue" : "" }} onClick={() => setView(true)} />
              <ReorderIcon style={{ backgroundColor: view ? "" : "blue" }} onClick={() => setView(false)} />
            </div>
            <p>{total} Products</p>

            <form action="#">
              <label htmlFor="sort"></label>
              <select name='sort' id='sort' onClick={sorting}>
                <option value="high">Price(High to Low)</option>
                <option value="low">Price(Low to High)</option>
              </select>

            </form>
          </div>

          {view ?


            <div className="main_products_list_grid">
              {
                sort.map((value) =>

                  <Card
                    key={value.id}
                    id={value.id}
                    name={value.name}
                    img={value.image}
                    price={value.price}
                    cat={value.category}


                  />
                )}
            </div>
            :
            <div className="main_products_list_view">
              {
                sort.map((value) =>

                  <CardListView
                    key={value.id}
                    id={value.id}
                    name={value.name}
                    img={value.image}
                    price={value.price}
                    cat={value.category}
                    des={value.description}


                  />
                )}
            </div>
          }
        </div>




      </div>


    </>
  )
}

export default Products