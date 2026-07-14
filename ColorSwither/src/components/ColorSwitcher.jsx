import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles.css'

export const ColorSwitcher = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, delay: 100, once: true });
    }, []);

    const [type, setType] = useState('');
    const [color, setColor] = useState('#fff');

    const handleRandomHEXColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
        setColor(randomColor);
    };
    
    const handleRandomRGBColor = () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setColor(randomColor);
    };

    const handleRandomColor = (number) => {
        number = Math.floor(Math.random() * 2);

        if (number % 2 === 0) {
            setType('hex');
        } else {
            setType('rgb');
        }

        if(type === 'hex') {
            handleRandomHEXColor();
        } else {
            handleRandomRGBColor();
        }
    }

    

    return (
      <div
        className="w-full h-screen inset-0 text-white text-2xl font-semibold"
        style={{ backgroundColor: color }}
        data-aos="fade-up"
      >
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={handleRandomHEXColor}
            className="cursor-pointer rounded-full bg-blue-600 p-4 mt-4 shadow-red-500 shadow-md"
          >
            HEX COLOR
          </button>
          <button
            onClick={handleRandomRGBColor}
            className="cursor-pointer rounded-full bg-green-600 p-4 mt-4 shadow-yellow-500 shadow-md"
          >
            RGB COLOR
          </button>
          <button
            onClick={
              handleRandomColor
            }
            className="cursor-pointer rounded-full bg-purple-600 p-4 mt-4 shadow-blue-500 shadow-md"
          >
            RANDOM COLOR
          </button>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-center mt-49">{color}</h1>
      </div>
    );
}