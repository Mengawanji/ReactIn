import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { Routes, Route, Link } from 'react-router-dom'
import NotFound from "./NotFound./NotFound.jsx"

import { BrowserRouter } from "react-router-dom"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button, {Press} from "./Button/Button.jsx"
import Student from "./Student.jsx"
import Greeting from "./Greeting.jsx"
import List, { Lost } from "./List"
import MyCompo, { Compo } from "./MyCompo.jsx"
import ColorPicker from "./ColorPicker.jsx"
import MyCar, { UpdateArray } from "./MyCar.jsx"
import Vehicle from "./MyVehicle.jsx"
import ToDoList from "./Todo/ToDoList.jsx"
import ComponentA from "./ComponentA.jsx"
import RefComponents from "./RefComponent.jsx"
import Master from "./Master.jsx"
import Clock from "./Clock/Clock.jsx"


function App() {
  const Veges = [{id: 1, name:"Tomato", cal: 55},
                 {id: 2, name:"Carrot", cal: 75},
                 {id: 3, name:"Pear", cal: 195}, 
                 {id: 4, name:"Ginger", cal: 112}]; 

  const spice = [{id: 5, name:"Curry", cal: 95},
                 {id: 6, name:"Salt", cal: 75},
                 {id: 7, name:"Pepper", cal: 45}, 
                 {id: 8, name:"Onion", cal: 107}];                
  return (
    <> 
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route exact path="/" element={<ComponentA/>} />
          <Route path="/Todo" element={<ToDoList/>} />
          <Route path="/CardDisplay" element={<Card/>} />
          <Route path="/ColorPicker" element={<ColorPicker/>} />
          <Route path="/Ref" element={<RefComponents/>} />
          <Route path="/CarDetail" element={<MyCar/>} />
          <Route path="/Master" element={<Master/>} />
          <Route path="/Clock" element={<Clock/>} />
        </Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Routes>  
    </>
  );

}

export default App
