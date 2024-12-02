import { useState } from "react";
import { hotels } from "../data";

const HotelsOffer = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (hotelIndex) => {
    setSelectedHotel(hotels[hotelIndex]);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedHotel(null);
  };

  const nextImage = () => {
    if (selectedHotel) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedHotel.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedHotel) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedHotel.images.length) %
          selectedHotel.images.length
      );
    }
  };

  return (
    <div
      className="relative bg-gradient-to-r from-red-700 via-red-500 to-red-800 py-12"
      id="hotels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-gray-900 font-extrabold text-4xl tracking-wide mb-4">
          عروض الفنادق
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.name}
              className="text-center border p-4 rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                className="h-48 w-full rounded-md mx-auto object-cover"
                src={hotel.images[0]} // Use images array
                alt={hotel.name}
              />
              <h3 className="mt-4 text-lg leading-6 font-medium text-white">
                {hotel.name}
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-200">
                {hotel.description}
              </p>
            </div>
          ))}
        </div>

        {selectedHotel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-8 rounded-lg max-w-lg mx-4">
              <button
                className="absolute top-0 right-0 p-2"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-full"
                onClick={prevImage}
              >
                &gt;
              </button>
              <img
                className="w-full h-auto rounded-md"
                src={selectedHotel.images[currentImageIndex]}
                alt={selectedHotel.name}
              />
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-full"
                onClick={nextImage}
              >
                &lt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelsOffer;
