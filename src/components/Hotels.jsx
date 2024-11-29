import { useState } from "react";

const HotelsOffer = () => {
  const hotels = [
    {
      name: "ميتروبول",
      description: "فندق فاخر في قلب المدينة يقدم أفضل الخدمات والراحة.",
      images: [
        "https://hi-cdn.t-rp.co.uk/images/hotels/384498/1?width=870&height=480&crop=false",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/234738838.jpg?k=c5da4224092e1ac117764c00a968100a5a7235b24af139dab9a3393a020d6e61&o=&hp=1",
        "https://hi-cdn.t-rp.co.uk/images/hotels/384498/1?width=870&height=480&crop=false",
        "https://carltonmoscow.com/upload/resize_cache/iblock/e32/480_480_1619711fa078991f0a23d032687646b21/fgc7z8uz6m1uc21mdchpgrrui1ku9ilh.png",
        "https://hi-cdn.t-rp.co.uk/images/hotels/384498/1?width=870&height=480&crop=false",
      ],
    },
    {
      name: "نوفوتيل موسكو سيتي",
      description: "فندق فاخر في قلب المدينة يقدم أفضل الخدمات والراحة.",
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/234738838.jpg?k=c5da4224092e1ac117764c00a968100a5a7235b24af139dab9a3393a020d6e61&o=&hp=1",
      ],
    },
    {
      name: "ماريوت بلازا",
      description: "فندق خمس نجوم يوفر إقامة مريحة وخدمات راقية.",
      images: [
        "https://hi-cdn.t-rp.co.uk/images/hotels/384498/1?width=870&height=480&crop=false",
        "https://example.com/another-image1.jpg",
        // Add more images as needed
      ],
    },
    {
      name: "رتز كارلتون",
      description: "فندق فاخر يقع في وسط المدينة مع إطلالة رائعة على البحر.",
      images: [
        "https://carltonmoscow.com/upload/resize_cache/iblock/e32/480_480_1619711fa078991f0a23d032687646b21/fgc7z8uz6m1uc21mdchpgrrui1ku9ilh.png",
      ],
    },
    {
      name: "فور سيزون",
      description: "فندق خمس نجوم يقدم خدمات متميزة وإقامة مريحة.",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5d/59/86/exterior--v17631841.jpg?w=700&h=-1&s=1",
      ],
    },
    {
      name: "ناشيونال",
      description: "فندق رائع يقدم إقامة مريحة وخدمات ممتازة.",
      images: [
        "https://russia4arab.com/wp-content/uploads/2021/02/d981d986d8afd982-d986d8a7d8b4d988d986d8a7d984-d981d989-d985d988d8b3d983d988-d98ad981d988d8ad-d985d986d987-d8b9d8a8d982-d8a7d984d8aad8a7d8b1d98ad8ae.jpg?w=640",
      ],
    },
    {
      name: "ماربوت",
      description: "فندق عصري يوفر جميع وسائل الراحة والترفيه.",
      images: [
        "https://hotelcms-contents-live.tajawal.com/2894bb10-7826-442d-af3f-f413b69035ab.jpg",
      ],
    },
    {
      name: "سانت ريجس",
      description: "فندق فاخر يقدم تجربة إقامة لا تُنسى وخدمات راقية.",
      images: [
        "https://the-st-regis-moscow-nikolskaya-hotel.albooked.com/data/Photos/OriginalPhoto/10187/1018778/1018778743/The-St-Regis-Moscow-Nikolskaya-Hotel-Exterior.JPEG",
      ],
    },
    {
      name: "أرارات بارك حياة",
      description: "فندق فاخر يقدم إقامة مريحة وتجربة فريدة.",
      images: [
        "https://araratparkhotel.ru/wp-content/uploads/2022/07/cropped-Ararat-Park-Hyatt-Moscow-Exterior-Sky.jpg",
      ],
    },
    {
      name: "ماريوت أرورا",
      description: "فندق عائلي رائع يوفر جميع وسائل الراحة والترفيه.",
      images: [
        "https://cdn.worldota.net/t/640x400/extranet/fc/45/fc4586de2778f70bbc8a39cc9f96227b55aac078.jpeg",
      ],
    },
    {
      name: "بلازا جاردن",
      description: "فندق عصري يقع في قلب المدينة مع حدائق جميلة.",
      images: [
        "https://crowne-plaza-moscow-world-trade-centre-hotel.nochi.com/data/Photos/OriginalPhoto/9736/973661/973661485/Crowne-Plaza-Moscow-World-Trade-Centre-An-Ihg-Hotel-Exterior.JPEG",
      ],
    },
  ];

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
    <div className="relative bg-gradient-to-r from-red-700 via-red-500 to-red-800 py-12" id="hotels">
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
