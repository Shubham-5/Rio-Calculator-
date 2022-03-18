import { BsCheck2, BsFillPencilFill } from "react-icons/bs";
const RioCurrentRates = ({ selectInput, setSelectInput }) => {
  return (
    <>
      <div className='current-rates'>
        <h2>ROI at Current Rates</h2>
      </div>

      <div
        className='current-rates-container'
        style={{
          border: selectInput ? "2px solid yellow" : "2px solid #ECECEC",
        }}>
        <div
          className='current-rates-icons'
          onClick={() => setSelectInput(!selectInput)}>
          {selectInput ? <BsCheck2 /> : <BsFillPencilFill />}
        </div>
        <div className='current-rates-input'>100.0 USD</div>
      </div>
      <div className='cart-title'>
        <h2>~ 3CAKE + 10 DON</h2>
      </div>
    </>
  );
};

export default RioCurrentRates;
