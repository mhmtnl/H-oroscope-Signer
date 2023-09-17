import PropTypes from "prop-types";
import Capricorn from "../assets/Capricorn.png";
import Aquarius from "../assets/Aquarius.png";
import Pisces from "../assets/Pisces.png";
import Aries from "../assets/Aries.png";
import Taurus from "../assets/Taurus.png";
import Gemini from "../assets/Gemini.png";
import Cancer from "../assets/Cancer.png";
import Leo from "../assets/Leo.png";
import Virgo from "../assets/Virgo.png";
import Libra from "../assets/Libra.png";
import Scorpio from "../assets/Scorpio.png";
import Sagittarius from "../assets/Sagittarius.png";

const Horoscope = ({ horos }) => {
  const id = horos.id - 1;
  const data = [
    {
      name: "Capricorn",
      element: "Earth",
      source: Capricorn,
      strengths: [
        "Courageous",
        "Determined",
        "Confident",
        "Optimistic",
        "Honest",
      ],
      weaknesses: [
        "Sarcastic",
        "Unforgiving",
        "Condescending",
        "Expecting worst",
        "Prejudiced",
      ],
    },
    {
      name: "Aquarius",
      element: "Air",
      source: Aquarius,
      strengths: [
        "Progressive",
        "Original",
        "Independent",
        "Humanitarian",
        "Emotional",
      ],
      weaknesses: [
        "No emotional expression",
        "Temperamental",
        "Uncompromising",
        "Unpredictable",
        "Angsty",
      ],
    },
    {
      name: "Pisces",
      element: "Water",
      source: Pisces,
      strengths: [
        "Compassionate",
        "Being loved",
        "Intuitive",
        "Gentle",
        "Musical",
      ],
      weaknesses: [
        "Fearful",
        "Overly trusting",
        "Ignoring-truth",
        "Victim",
        "Unfocused",
      ],
    },
    {
      name: "Aries",
      element: "Fire",
      source: Aries,
      strengths: [
        "Courageous",
        "Determined",
        "Confident",
        "Enthusiastic",
        "Optimistic",
      ],
      weaknesses: [
        "Impatient",
        "Moody",
        "Short-tempered",
        "Impulsive",
        "Aggressive",
      ],
    },
    {
      name: "Taurus",
      element: "Earth",
      source: Taurus,
      strengths: ["Reliable", "Patient", "Practical", "Devoted", "Responsible"],
      weaknesses: [
        "Stubborn",
        "Possessive",
        "Uncompromising",
        "Hot-headed",
        "Worrying",
      ],
    },
    {
      name: "Gemini",
      element: "Air",
      source: Gemini,
      strengths: [
        "Gentle",
        "Affectionate",
        "Curious",
        "Adaptable",
        "Quick Learner",
      ],
      weaknesses: [
        "Nervous",
        "Inconsistent",
        "Indecisive",
        "Critical",
        "Unstable-emotions",
      ],
    },
    {
      name: "Cancer",
      element: "Water",
      source: Cancer,
      strengths: [
        "Tenacious",
        "Imaginative",
        "Loyal",
        "Emotional",
        "Sympathetic",
      ],
      weaknesses: [
        "Moody",
        "Pessimistic",
        "Suspicious",
        "Manipulative",
        "Insecure",
      ],
    },
    {
      name: "Leo",
      element: "Fire",
      source: Leo,
      strengths: [
        "Creative",
        "Romantic",
        "Warm-hearted",
        "Cheerful",
        "Humorous",
      ],
      weaknesses: [
        "Arrogant",
        "Stubborn",
        "Self-centered",
        "Lazy",
        "Inflexible",
      ],
    },
    {
      name: "Virgo",
      element: "Earth",
      source: Virgo,
      strengths: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
      weaknesses: [
        "Shyness",
        "Worried",
        "Overly-critical",
        "Repressed",
        "Selective",
      ],
    },
    {
      name: "Libra",
      element: "Air",
      source: Libra,
      strengths: [
        "Cooperative",
        "Diplomatic",
        "Gracious",
        "Fair-minded",
        "Social",
      ],
      weaknesses: [
        "Indecisive",
        "Gossipy",
        "Vindictive",
        "Self-pity",
        "Dramatic",
      ],
    },
    {
      name: "Scorpio",
      element: "Water",
      source: Scorpio,
      strengths: [
        "Resourceful",
        "Brave",
        "Passionate",
        "Stubborn",
        "Thoughtful",
      ],
      weaknesses: [
        "Distrusting",
        "Jealous",
        "Secretive",
        "Violent",
        "Manipulative",
      ],
    },
    {
      name: "Sagittarius",
      element: "Fire",
      source: Sagittarius,
      strengths: [
        "Generous",
        "Idealistic",
        "Sense of humor",
        "Philosophical",
        "Hardworking",
      ],
      weaknesses: [
        "Forgotten promises",
        "Impatient",
        "Undiplomatical speech",
        "Rude",
        "Know-it-all",
      ],
    },
  ];

  const elementType =
    data[id].element === "Fire"
      ? "text-[#E74C3C]"
      : data[id].element === "Air "
      ? "text-[#E67E22]"
      : data[id].element === "Water"
      ? "text-[#3498DB]"
      : "text-[#2ECC71]";

  const backType =
    data[id].element === "Fire"
      ? "bg-[#E74C3C]"
      : data[id].element === "Air "
      ? "bg-[#E67E22]"
      : data[id].element === "Water"
      ? "bg-[#3498DB]"
      : "bg-[#2ECC71]";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-center border-t-2 pt-8 gap-5 mt-12 xl:mx-10">
      <div className="col-span-1 lg:col-span-3 text-center">
        <span className="drop-shadow-2xl text-4xl lg:text-5xl font-extrabold italic text-white">
          {horos.name}
        </span>{" "}
        <br />
        <span
          className={`drop-shadow-2xl text-md lg:text-2xl font-black italic ${elementType}`}
        >
          {" "}
          {data[id].element}
        </span>
      </div>
      <div className="col-span-1">
        <p className="text-xl lg:text-2xl text-white font-bold text-center lg:text-right font-mono mx-2">
          Strenghts
        </p>
        <div className="flex flex-wrap lg:mt-5 justify-center lg:justify-end">
          {data[id].strengths.map((thing) => (
            <p
              className={`drop-shadow-2xl flex items-center text-lg xl:text-xl font-extrabold rounded-2xl my-2 px-2 mx-1 xl:py-1 xl:px-2 ${backType}`}
              key={thing}
            >
              {thing}
            </p>
          ))}
        </div>
      </div>
      <div className="col-span-1 mx-auto my-auto">
        <img
          src={data[id].source}
          width={250}
          height={250}
          alt=""
          className="drop-shadow-2xl"
        />
      </div>
      <div className="col-span-1 justify-start">
        <p className="text-xl lg:text-2xl font-bold text-white text-center lg:text-left font-mono mx-2">
          Weaknesses
        </p>
        <div className="flex flex-wrap lg:mt-5 justify-center lg:justify-start">
          {data[id].weaknesses.map((thing) => (
            <p
              className="drop-shadow-2xl flex items-center text-lg xl:text-xl font-bold rounded-2xl my-2 px-2 mx-1 xl:py-1 xl:px-2 bg-[#633974] opacity-50"
              key={thing}
            >
              {thing}
            </p>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};
Horoscope.propTypes = {
  horos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
export default Horoscope;
