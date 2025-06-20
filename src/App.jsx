import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button, {Press} from "./Button/Button.jsx"
import Student from "./Student.jsx"
import Greeting from "./Greeting.jsx"
import List, { Lost } from "./List"
import MyCompo, { Compo } from "./MyCompo.jsx"

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
      <Card/> 
      <Food/>
      <Button/>
      <Student name="John" age={30} isStudent={true}/>
      <Student name="Patrick" age={40} isStudent={false}/>
      <Student/>  
      <Greeting isLoggedIn={true} username="BroCode"/>
      <List/>
      {Veges.length > 0 ? <Lost items={Veges} cal="Veges"/> : null}
      {spice.length > 0 ?<Lost items={spice} cal="spice"/> : null}
      <Press/>
      <MyCompo/>
      <Compo/>
    </>
  );

}

export default App
