import { useState } from "react";
import PropTypes from "prop-types";

const AgeCalculatorForm = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState("");

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:ml-7 md:my-8 items-center"
    >
      <input
        className="h-10 col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={birthDate}
        type="date"
        onChange={handleChangeDate}
      />
      <button
        className="drop-shadow-2xl h-10 col-span-1 disabled:bg-slate-300 disabled:opacity-25 disabled:cursor-not-allowed text-white bg-[#633974]  hover:bg-[#A569BD] focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-md"
        disabled={!birthDate}
        type="submit"
      >
        Calculate Age
      </button>
    </form>
  );
};

AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};

export default AgeCalculatorForm;
