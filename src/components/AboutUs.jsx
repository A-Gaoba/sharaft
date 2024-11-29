import img from "../assets/sharaf.jpg";
import { services } from "../data";

const AboutMe = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-red-700 via-red-500 to-red-800 py-12"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-gray-900 font-extrabold text-4xl tracking-wide mb-4">
          عن الشركة
        </h2>
        <p className="mt-2 md:text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-3xl">
          نقدم لكم أفضل الخدمات السياحية لضمان تجربة سفر لا تُنسى. من حجوزات
          الفنادق إلى تنظيم الفعاليات والجولات السياحية، نضمن لكم رحلة مريحة
          وممتعة.
        </p>

        <div className="mt-10 md:flex justify-evenly gap-10">
          <img
            className="h-80 w-80 rounded-full object-cover mb-4"
            src={img}
            alt="الملف الشخصي"
          />

          <div className="flex md:flex-col gap-6 justify-center items-center">
            <div className="text-center">
              <span className="block text-2xl font-extrabold text-gray-900">
                06 سنوات
              </span>
              <span className="mt-1 block text-lg leading-6 font-medium text-gray-100">
                من الخبرة
              </span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-extrabold text-gray-900">
                5287+
              </span>
              <span className="mt-1 block text-lg leading-6 font-medium text-gray-100">
                عملاء راضون{" "}
              </span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-extrabold text-gray-900">
                1350+
              </span>
              <span className="mt-1 block text-lg leading-6 font-medium text-gray-100">
                خدمات مقدمة{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2">
          {services.map((service) => (
            <div key={service.name} className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white mx-auto">
                {service.icon}
              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-white">
                {service.name}
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-200">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
