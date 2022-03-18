const HiddenDetails = ({ isOpen }) => {
  return (
    <>
      <div style={{ display: isOpen ? "" : "none" }}>
        <div className='apy'>
          <div className='title'>APY</div>
          <div>64.34%</div>
        </div>

        <div className='hidden-details-list'>
          <ul>
            <li>Calculated based on current rates</li>
            <li>
              All fugures are estimates provided for your convenience only, and
              by no means represent guaranted returns.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HiddenDetails;
