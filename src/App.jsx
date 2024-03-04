import './App.css'
import FormOne from './components/FormOne'
import { createContext, useState } from "react";
import List from './components/List';
import DecreaseTimer from './components/DecreaseTimer';
import JiraBoar from './components/JiraBoar';

export const PreviousContext = createContext();
function App() {

const [previous, setPrevious] = useState(false);
const [formTwoData, setFormTwoData] = useState([]);
  return (
    // <>
    //   <PreviousContext.Provider value={{ previousValue: previous,previousFunction:setPrevious,formTwoData:formTwoData,setFormTwoData:setFormTwoData }}>
    //     <FormOne></FormOne>
    //   </PreviousContext.Provider>
    // </>
//  <List></List>
<JiraBoar></JiraBoar>
// {/* <DecreaseTimer/> */}
    );
}

export default App
