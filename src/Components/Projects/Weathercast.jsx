
import { useState } from "react"


function Weathercast() {
    const [count, setCount] = useState({})
    const [city, setCity] = useState("")
    const [time, setTime] = useState("")
    const [text, setText] = useState("")
    const [message, setMessage] = useState("")
    const [Speedtext, setSpeedtext] = useState("")

    async function getWeather() {


        if (city === "") return alert("Enter the City first")
        try {
            const data = await fetch("http://api.weatherapi.com/v1/current.json?key=41dd87c079c44f7b9b9172020243005&q=" + city + "&aqi=yes")
            var json = await data.json()
            setCount(json)
            console.log(json)
        }
        catch (error) {
            console.error(error)

        }

        if (json?.current?.feelslike_c <= 25) {
            setMessage("Cool")

        } else if (json?.current?.feelslike_c > 25 && json?.current?.feelslike_c < 32) {
            setMessage("Hot")

        } else {
            setMessage("Extreme Hot")
        }


        setCity("")
        setTime(new Date().toLocaleTimeString())
        setText("°C")
        setSpeedtext("Wind Speed(km/h):")
    }


    function resetWeather() {
        setCount("")
        setCity("")
        setTime("")
        setText("")
        setSpeedtext("")
        setMessage("")
    }

    return (
        <>
            <div className="main_div">

                <div className='Wouterdivbox'>
                    <h2>Weather App</h2>
                    <div className='Wsearch_bar'>
                        <input type="text" placeholder='Search the city..' onChange={(event) => setCity(event.target.value)} value={city} required />
                        <div className='div_btn'>
                            <button onClick={getWeather}>Get Weather <i className="fa-solid fa-magnifying-glass"></i></button>
                            <button onClick={resetWeather}>Clear</button>
                        </div>
                    </div>
                    <div className='Wmain_div'>
                        <h2>{count?.location?.name}</h2>
                        <h2>{count?.current?.feelslike_c} {text}</h2>
                        <h2>{message}</h2>
                        <h3>{time}</h3>
                        <h4>{Speedtext} {count?.current?.wind_kph}</h4>
                    </div>
                </div>
            </div >


        </>


    )




}


export default Weathercast

