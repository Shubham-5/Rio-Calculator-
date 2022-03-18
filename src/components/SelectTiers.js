const SelectTiers = () => {
  return (
    <>
      <div className='select-tier-title'>
        <h2>Select Tier</h2>
      </div>
      <div className='select-tier-options'>
        <div>
          <h5>Tier 1</h5>
        </div>
        <div>
          <h5>Tier 2</h5>
        </div>
        <div>
          <h5>Tier 3</h5>
        </div>
        <div className='active'>
          <h5>Tier 4</h5>
        </div>
        <div>
          <h5>Tier 5</h5>
        </div>
      </div>
    </>
  );
};

export default SelectTiers;
