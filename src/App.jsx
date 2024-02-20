import './App.css'
import FormOne from './components/FormOne'
import { createContext, useState } from "react";

export const PreviousContext = createContext();
function App() {

const [previous, setPrevious] = useState(false);
const [formTwoData, setFormTwoData] = useState([]);
  return (
    <>
      <PreviousContext.Provider value={{ previousValue: previous,previousFunction:setPrevious,formTwoData:formTwoData,setFormTwoData:setFormTwoData }}>
        <FormOne></FormOne>
      </PreviousContext.Provider>
    </>
  );
}

export default App
