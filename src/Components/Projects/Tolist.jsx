import { useState } from "react"

function Tolist(props) {

    const [true1, setTrue1] = useState(false)

    function clickbtn2(){
        setTrue1(true)
        

    }
    function clickbtn21(){

        setTrue1(false)
    }

    return (

        <div>
                    <li  style={{ textDecoration: true1 ? 'line-through' : 'none' }}> <span 
                     onDoubleClick={clickbtn21} onClick={clickbtn2}> 
            <i className="fa-solid fa-trash"></i> </span>{props.text} </li>
        </div>
    )




}
export default Tolist
