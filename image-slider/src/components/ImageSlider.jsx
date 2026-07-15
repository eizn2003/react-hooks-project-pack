import { useState, useEffect } from "react";
import "../components/styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);

        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (url) {
      fetchImages();
    }
  }, [url, limit, page]);

  if (loading) {
    return (
      <div className="text-center font-bold text-blue-400">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center font-bold text-red-600">
        Error Occured ! {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-180 h-110 overflow-hidden rounded-md shadow-lg">

        <BsArrowLeftCircleFill
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? images.length - 1 : prev - 1,
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-blue-500 hover:text-blue-700 cursor-pointer"
        />

        
        {images && images.length
          ? images.map((ImageItem, index) => {
              return (
                <div key={ImageItem.id} className="absolute inset-0">
                  <img
                    src={ImageItem.download_url}
                    alt={ImageItem.author}
                    className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${
                      currentSlide === index
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  />
                </div>
              );
            })
          : null}

        
        <BsArrowRightCircleFill
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === images.length - 1 ? 0 : prev + 1,
            )
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-4xl text-blue-500 hover:text-blue-700 cursor-pointer"
        />

        
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
          {images && images.length
            ? images.map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors duration-200 ${
                      currentSlide === index
                        ? "bg-yellow-400"
                        : "bg-green-500 hover:bg-yellow-300"
                    }`}
                  ></button>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
