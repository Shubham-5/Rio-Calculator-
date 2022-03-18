import { useState } from "react";
import HiddenDetails from "./components/HiddenDetails";
import ButtonContainer from "./components/ButtonContainer";
import ShowDetailsToggle from "./components/ShowDetailsToggle";
import CardHeading from "./components/CardHeading";
import BalanceDetails from "./components/BalanceDetails";
import TimeFrames from "./components/TimeFrames";
import SelectTiers from "./components/SelectTiers";
import RioCurrentRates from "./components/RioCurrentRates";
import ApyToggle from "./components/ApyToggle";

function App() {
  const [selectInput, setSelectInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='container' style={{ height: isOpen ? "830px" : "697px" }}>
        <CardHeading />
        <BalanceDetails />
        <TimeFrames />
        <ApyToggle />
        <SelectTiers />
        <RioCurrentRates
          setSelectInput={setSelectInput}
          selectInput={selectInput}
        />
        <ButtonContainer />
        <ShowDetailsToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        <HiddenDetails isOpen={isOpen} />
      </div>
    </div>
  );
}

export default App;
