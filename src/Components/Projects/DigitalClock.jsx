import { useState } from 'react';


function DigitalClock() {


let time = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(time)

let date = new Date().toLocaleDateString();

const idInterwal = setInterval(updatetimer, 1000)

function updatetimer (){
    let utime = new Date().toLocaleTimeString();

    setCtime(utime)
    clearInterval(idInterwal)
}

let h = new Date().getHours();
let text = ""

if(h>5 && h<12)
    {
        text = "Good Morning";
    }else if( h>12 && h<17)
        {
            text = "Good Afternoon";

        }else if(h>17 && h<20)
            {
                text = "Good Evening";
            }else
            {
                text = "Good Night";
            }

    return(

        <>
        <div className="main_div">
 <div className='outerdivbox'>
        <h2 className='c_heading'>Digital Clock</h2>
        <h1 className='divbox'>{ctime}</h1>
        <h2 className='c_heading'>{text}</h2>
        <h1 className='divbox'>{date}</h1>
        </div>
       


        </div>
       
        
        </>
    )

  
}
export default DigitalClock