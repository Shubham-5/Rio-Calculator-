import { BsChevronDown } from "react-icons/bs";

const ShowDetailsToggle = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className='show-details-title' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <h2>Hide details</h2> : <h2>Show details</h2>}
        <div>
          <BsChevronDown />
        </div>
      </div>
    </>
  );
};

export default ShowDetailsToggle;
