import { useState } from "react"

function Footer() {

    const [email, setEmail] = useState("")


    function Submit() 
    {
        if (email === "") return alert("Enter the Email Id")
        else alert("Thank you for your Feedback");
            setEmail("")
        
       
        


    }
    return (

        <>

            <footer>

                <div className="footer_div">

                    <input type="email" placeholder="Enter Your Email.." onChange={(event) => setEmail(event.target.value)} value={email} />
                    <button onClick={Submit}>Submit</button>
                </div>

            </footer>
        </>
    )

}
export default Footer