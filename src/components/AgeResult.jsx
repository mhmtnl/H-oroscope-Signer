import PropTypes from "prop-types";

const AgeResult = ({ age }) => {
  return (
    <h4 className="drop-shadow-2xl mt-5 mx-10 text-xl lg:text-3xl font-extrabold italic text-white text-center">
      <span className="text-[#F16796] text-4xl lg:text-6xl"> {age.years}</span>
      YEARS,
      <span className="text-[#F16796]  text-4xl lg:text-6xl"> {age.months}</span>
      MONTHS, 
      <span className="text-[#F16796]  text-4xl lg:text-6xl"> {age.days}</span>
      DAYS
    </h4>
  );
};

AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};

export default AgeResult;
