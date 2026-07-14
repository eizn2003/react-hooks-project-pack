import { useState, useEffect } from "react";
import AOS from "aos";
import { Data } from "./Data";
import "aos/dist/aos.css";
import "./styles.css";

export const Accordion = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleSingleselection = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

    const handleMultipleselection = (index) => {
        let copyActiveIndexes = [...activeIndexes];
        const indexPosition = copyActiveIndexes.indexOf(index);
        if (indexPosition > -1) {
            copyActiveIndexes.splice(indexPosition, 1);
        } else {
            copyActiveIndexes.push(index);
        }
        setActiveIndexes(copyActiveIndexes);
    };

    console.log( "activeIndexes", activeIndexes);


  return (
    <div
      data-aos="fade-up"
      className="flex flex-col lg:w-[50%] mx-auto mt-30 text-white bg-orange-700 p-4 rounded-lg shadow-lg"
    >
      <button
        onClick={() => setToggle(!toggle)}
        className=" cursor-pointer bg-white text-3xl font-semibold  text-orange-700 rounded-full shadow-lg p-4 mx-auto w-[50%] mb-10"
      >
        {toggle ? "Single Selection" : "Multiple Selection"}
      </button>
      <div>
        {Data && Data.length > 0 ? (
          Data.map((items) => (
            <div
              key={items.id}
              data-aos="fade-up"
              className="bg-orange-600 p-4 mb-2 rounded-lg shadow-md"
            >
              <div
                onClick={toggle ? () => handleSingleselection(items.id) : () => handleMultipleselection(items.id)}
                className="display flex justify-between items-center cursor-pointer"
              >
                <h4 className="cursor-pointer font-2xl font-semibold">
                  {items.question.toUpperCase()}
                </h4>
                <span className="text-2xl font-semibold">+</span>
              </div>

              <div className="text-gray-400 mt-2">
                {activeIndex === items.id || activeIndexes.includes(items.id) ? (
                  <div className="font-semibold">{items.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found !</div>
        )}
      </div>
    </div>
  );
};
