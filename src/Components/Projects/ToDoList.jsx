import Tolist from "./Tolist";

import { useState } from "react";


function ToDoList() {

    const [name, setName] = useState("")
    const [newname, setNewName] = useState([]);
    

    // const [true1, setTrue1] = useState(false)

    const clickbtn = () => {
        // setNewName((oldvalue) => { return [...oldvalue, name]; });
        if (name === "") return
        setNewName(([...newname, name]))
        setName("");

    }

    function ClearAll() {
        setNewName([])

    }

    function onchange(event) {
        return setName(event.target.value)
    }
    return (
        <>
        <div className="main_div">
            <div className='outerdivbox'>
                <div className='cal_div'>
                    <h2>ToDoList</h2>
                    <div className="input_area">
                        <input className="input_value1" type="text" placeholder="Enter the task.." onChange={onchange} value={name} />
                        <button onClick={clickbtn} className="todo_btn">+</button>
                    </div>
                    <ul className="order_list">
                        {
                            newname.map((val) => {
                                return <Tolist  text={val} />

                            })
                            // newname.map((val) => {
                            //     return     <div>

                            //     <li  style={{ textDecoration: true1 ? 'line-through' : 'none' }}> <span onClick={clickbtn2}> 
                            //     <i className="fa-solid fa-trash"></i> </span> {val} </li>
                            // </div>
                        }

                    </ul>
                    <button className="btn28" onClick={ClearAll}>AC</button>

                </div>
            </div>
            </div>
        </>
    )
}

export default ToDoList