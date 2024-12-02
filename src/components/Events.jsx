import { useState } from "react";
import PropTypes from "prop-types";
import EventForm from "./EventForm";
import { events } from "../data";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleBookEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseForm = () => {
    setSelectedEvent(null);
  };

  return (
    <div
      className="relative bg-gradient-to-r from-red-700 via-red-500 to-red-800 py-12"
      id="events"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-gray-900 font-extrabold text-4xl tracking-wide mb-4">
          فعاليات
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, showAll ? events.length : 6).map((event) => (
            <EventCard
              key={event.name}
              event={event}
              onBook={() => handleBookEvent(event)}
            />
          ))}
        </div>
        {!showAll && (
          <div className="mt-10">
            <button
              onClick={handleShowAll}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              عرض الكل
            </button>
          </div>
        )}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <EventForm event={selectedEvent} onClose={handleCloseForm} />
          </div>
        )}
      </div>
    </div>
  );
};

const EventCard = ({ event, onBook }) => {
  const [selectedImage, setSelectedImage] = useState(event.images[0]);

  return (
    <div className="text-center border p-4 rounded-lg shadow-lg">
      <div className="relative w-full mb-4">
        <img
          src={selectedImage}
          className="block w-full h-64 object-cover rounded-lg"
          alt={event.name}
        />
      </div>
      <div className="flex flex-wrap justify-center space-x-2 mb-4">
        {event.images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`w-12 h-12 object-cover rounded-lg cursor-pointer m-1 ${
              selectedImage === image ? "border-2 border-indigo-600" : ""
            }`}
            onClick={() => setSelectedImage(image)}
            alt={`${event.name} ${index + 1}`}
          />
        ))}
      </div>
      <h3 className="mt-4 text-lg leading-6 font-medium text-white">
        {event.name}
      </h3>
      <p className="mt-2 text-base leading-6 text-gray-200">
        {event.description}
      </p>
      <button
        onClick={onBook}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
      >
        حجز
      </button>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onBook: PropTypes.func.isRequired,
};

export default Events;
