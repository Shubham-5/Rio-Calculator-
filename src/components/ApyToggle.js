import { BsToggleOff } from "react-icons/bs";

const ApyToggle = () => {
  return (
    <>
      <div className='apy-container'>
        <div className='apy-title'>Enable Accelerated APY</div>
        <div className='apy-switch'>
          <BsToggleOff />
        </div>
      </div>
    </>
  );
};

export default ApyToggle;
