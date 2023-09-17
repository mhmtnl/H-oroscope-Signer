import { useState } from "react";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import AgeResult from "./components/AgeResult";
import AgeCalculator from "./components/AgeCalculator";
import background from "/back-ground.jpg";
import Horoscope from "./components/Horoscope";

const App = () => {
  const [age, setAge] = useState(null);
  const [horos, setHoros] = useState(null);
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj) % 12;
    const ageDays = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())
    );
    const date = birthDateObj.getDate();
    const month = birthDateObj.getMonth() + 1;
    if ((month == 12 && date > 21) || (month == 1 && date < 21)) {
      setHoros({
        name: "Capricorn",
        id: 1,
      });
    } else if ((month == 1 && date > 20) || (month == 2 && date < 20)) {
      setHoros({
        name: "Aquarius",
        id: 2,
      });
    } else if ((month == 2 && date > 19) || (month == 3 && date < 21)) {
      setHoros({
        name: "Pisces",
        id: 3,
      });
    } else if ((month == 3 && date > 20) || (month == 4 && date < 21)) {
      setHoros({
        name: "Aries",
        id: 4,
      });
    } else if ((month == 4 && date > 20) || (month == 5 && date < 21)) {
      setHoros({
        name: "Taurus",
        id: 5,
      });
    } else if ((month == 5 && date > 20) || (month == 6 && date < 22)) {
      setHoros({
        name: "Gemini",
        id: 6,
      });
    } else if ((month == 6 && date > 21) || (month == 7 && date < 23)) {
      setHoros({
        name: "Cancer",
        id: 7,
      });
    } else if ((month == 7 && date > 22) || (month == 8 && date < 24)) {
      setHoros({
        name: "Leo",
        id: 8,
      });
    } else if ((month == 8 && date > 23) || (month == 9 && date < 24)) {
      setHoros({
        name: "Virgo",
        id: 9,
      });
    } else if ((month == 9 && date > 23) || (month == 10 && date < 24)) {
      setHoros({
        name: "Libra",
        id: 10,
      });
    } else if ((month == 10 && date > 23) || (month == 11 && date < 23)) {
      setHoros({
        name: "Scorpio",
        id: 11,
      });
    } else if ((month == 11 && date > 22) || (month == 12 && date < 22)) {
      setHoros({
        name: "Sagittarius",
        id: 12,
      });
    }
    if (ageDays >= 0) {
      setAge({
        years: ageYears,
        months: ageMonths,
        days: ageDays,
      });
    } else {
      setAge({
        years: ageYears,
        months: ageMonths,
        days: ageDays + 30,
      });
    }
  };

  return (
    <section
      className="flex justify-center h-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundClip: "fixed",
      }}
    >
      <div className="h-screen">
        <div className="container flex h-auto">
          <div className="py-8 px-4 mx-auto w-3/4 my-10 h-full text-center backdrop-blur-md bg-white/20 rounded-xl">
            <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Age<span className="text-[#F16796]"> )( </span>roscope <br />{" "}
              <span className="mt-4  opacity-5">Reporter</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-7 mt-2 tems-center">
              <p className="col-span-1 text-xl font-bold text-white lg:text-2xl md:text-right md:border-r-2 border-[#F16796] md:pr-8 my-6">
                Are you aware of that how long you have lived in years, months
                and days
              </p>
              <AgeCalculator
                calculateAge={calculateAge}
                className="col-span-1"
              />
            </div>
            {age &&
              (age.years >= 0 ? (
                <AgeResult age={age} />
              ) : (
                <h4 className="mt-5 mx-10 text-xl md:text-3xl font-extrabold italic text-white text-center">
                  Do not think about the distant time
                </h4>
              ))}
            {horos && <Horoscope horos={horos} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
