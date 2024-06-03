
import { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);
  

  function Increase() {
    setCount(count + 1)
  }


  function Decrease() {

    if (count < 1) {
    
      setCount(0)
      alert("Zero Limit is reached")
    }else 
    setCount(count - 1)
  }

  function Reset() {
    setCount(0)
  }
  return (

    <>
    <div className="main_div">

   
      <div className='outerdivbox'>
        <h2 className='c_heading'>Counter</h2>
        <div className='divbox'>
          <button onClick={Increase}>Counter +</button>
          <h2 className="c_heading">{count}</h2>
          <button onClick={Decrease}>Counter -</button>


        </div>

        <button onClick={Reset} className="btn_reset">Reset</button>



      </div>
      </div>

    </>
  )

}

export default Counter