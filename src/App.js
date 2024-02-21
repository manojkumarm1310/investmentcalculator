import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import Results from "./Components/Results";
import { useState } from "react";
function App() {
  const [inputData,setInputData]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});
const inputValidation=inputData.duration >=1
function handleInput(name,value)
{
    setInputData((prev)=>{
        return {...prev,[name]:+value}
    })

  }
  
  return (
      <>
        <Header />
        <InputSection inputData={inputData} onChangeInput={handleInput}/>
        
        {inputValidation ? <Results inputData={inputData}/> : <p className="center">Duration must greater than 0</p>}
      </>
  );
}

export default App;
