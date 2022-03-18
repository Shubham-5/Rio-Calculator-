import { BsFillCircleFill, BsToggleOn } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
const CardHeading = () => {
  return (
    <>
      <div className='heading'>
        <h2 className='title'>ROI Calculator</h2>
        <h2 className='close-icon'>
          <AiOutlineClose />
        </h2>
      </div>
      <div className='small-titles'>
        <div className='small-title-icon'>
          <BsFillCircleFill />
        </div>
        <div className='small-title-text'>Cake</div>

        <div className='small-title-icon-on'>
          <BsToggleOn />
        </div>
        <div className='small-title-text'>USD</div>
      </div>
    </>
  );
};

export default CardHeading;
