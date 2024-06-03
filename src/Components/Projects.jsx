import { Link, Outlet } from "react-router-dom"

function Projects() {

    return (
        <>
            <div className="project_main_div">
                <div> <h4>Here are the List of My Projects</h4>  </div>

                <div className="project_main_list">
                    <ul>
                        <Link to="/Projects/Counter"><button>Counter</button></Link>
                        <Link to="/Projects/DigitalClock"><button>DigitalClock</button></Link>
                        <Link to="/Projects/TodoList"><button>ToDolist</button></Link>
                        <Link to="/Projects/Weathercast"><button>WeatherCast</button></Link>
                        

                    </ul>


                </div>


            </div>
            <Outlet />
        </>
    )

}

export default Projects