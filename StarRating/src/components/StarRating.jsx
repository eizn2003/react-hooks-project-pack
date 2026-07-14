import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

export const StarRating = ({ numberOfStars }) => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
    });
  }, []);

  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0); 

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
  }
  
  return (
    <div className="w-full h-screen bg-green-500 flex justify-center items-center gap-4">
        {[...Array(numberOfStars)].map((_, index) => {
          index += 1;
            return (
                <FaStar
                    key={index}
                    className={index <= (hover || rating) ? "text-yellow-500" : "text-red-500"}
                    size={40}                    
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => handleClick(index)}
                />
            )
        }
        )}
    </div>
  )
}