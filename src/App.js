import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects';
import Login from './Components/Login';
import Weathercast from './Components/Projects/Weathercast';
import ToDoList from './Components/Projects/ToDoList';
import DigitalClock from './Components/Projects/DigitalClock';
import Counter from './Components/Projects/Counter';


function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Projects" element={<Projects />} />


          <Route element={<Projects />}>

            <Route path="/" element={<Home />} />
            <Route path="/Projects/Counter" element={<Counter />} />

           <Route path="/Projects/DigitalClock" element={<DigitalClock />} />
           <Route path="/Projects/TodoList" element={<ToDoList />} />
            <Route path="/Projects/Weathercast" element={<Weathercast />} />


          </Route>

        </Route>
      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App;
