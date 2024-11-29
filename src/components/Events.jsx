import { useState } from "react";
import PropTypes from "prop-types";
import EventForm from "./EventForm";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      name: "كلاب الهاسكي",
      description: "استمتع بجولات مذهلة مع كلاب الهاسكي في الريف الروسي.",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20220129/pngtree-sledge-dogs-in-speed-racing-sled-odyssee-running-photo-image_21218160.jpg",
        "https://img.youm7.com/ArticleImgs/2020/12/30/43546-%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D9%87%D8%A7%D8%B3%D9%83%D9%89-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B0-(5).jpg",
        "https://img.youm7.com/ArticleImgs/2020/12/30/39194-%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D9%87%D8%A7%D8%B3%D9%83%D9%89-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B0-(2).jpg",
        "https://cdn.alweb.com/thumbs/aleeff/article/fit710x532/%D8%B5%D9%81%D8%A7%D8%AA-%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D9%87%D8%A7%D8%B3%D9%83%D9%8A-%D8%A7%D9%84%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D8%A8-%D9%88%D8%B7%D8%B1%D9%82-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9%D9%87%D8%A7.jpg ",
      ],
    },
    {
      name: "الدب",
      description: "لقاء قريب مع الدببة الروسية في بيئتها الطبيعية.",
      images: [
        "https://podarokservis.ru/image/cache/data/product/FOTO/2017.05.25.12-1000x1000.jpg",
        "https://example.com/another-bear-image.jpg",
      ],
    },
    {
      name: "الأكواخ في الريف الروسي",
      description: "تجربة الإقامة في الأكواخ الريفية وسط الطبيعة الخلابة.",
      images: [
        "https://optim.tildacdn.com/tild3666-6562-4332-b331-383534373262/-/format/webp/20231013_156_Copy_Co.jpg",
        "https://example.com/another-cabin-image.jpg",
      ],
    },
    {
      name: "سيارات الدريفت",
      description: "قيادة سيارات الدريفت المثيرة في مضمار خاص.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-drift-car-image.jpg",
      ],
    },
    {
      name: "هليكوبتر",
      description: "جولات مروحية مذهلة لمشاهدة المعالم من السماء.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-helicopter-image.jpg",
      ],
    },
    {
      name: "دبابات كبيرة",
      description: "تجربة قيادة الدبابات الكبيرة في ميادين خاصة.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-tank-image.jpg",
      ],
    },
    {
      name: "دبابات الثلج",
      description: "مغامرات على دبابات الثلج في المناظر الطبيعية الثلجية.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-snowmobile-image.jpg",
      ],
    },
    {
      name: "المنطاد",
      description: "رحلات منطاد هوائي لرؤية المناظر الطبيعية الخلابة.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-balloon-image.jpg",
      ],
    },
    {
      name: "الكروز",
      description: "رحلات بحرية فاخرة للاستمتاع بالمحيطات والأنهار.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-cruise-image.jpg",
      ],
    },
    {
      name: "تذاكر المتاحف",
      description: "استكشاف أفضل المتاحف والمعارض الثقافية.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-museum-image.jpg",
      ],
    },
    {
      name: "تذاكر طيران داخلي _قطارات",
      description: "حجز تذاكر الطيران الداخلي والقطارات للسفر بسهولة.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-ticket-image.jpg",
      ],
    },
    {
      name: "الزبلاين",
      description: "تجربة الزبلاين المثيرة عبر الغابات والوديان.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-zipline-image.jpg",
      ],
    },
    {
      name: "التلفريك",
      description: "ركوب التلفريك لمشاهدة المناظر البانورامية الخلابة.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-cablecar-image.jpg",
      ],
    },
    {
      name: "جولات سياحية",
      description: "جولات سياحية منظمة لاكتشاف أجمل الأماكن والمعالم.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-tour-image.jpg",
      ],
    },
    {
      name: "كارتنج",
      description: "سباقات الكارتنج المثيرة لمحبي السرعة والإثارة.",
      images: [
        "https://via.placeholder.com/150",
        "https://example.com/another-karting-image.jpg",
      ],
    },
  ];
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
    <div className="relative bg-gradient-to-r from-red-700 via-red-500 to-red-800 py-12" id="events">
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
