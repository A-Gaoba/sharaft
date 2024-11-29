import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="hidden md:block">
            <h3 className="text-lg font-medium text-black">عن الشركة</h3>
            <p className="mt-4 text-sm text-gray-400">
              نحن نسعى لتوفير أفضل العروض والخدمات السياحية التي تناسب جميع
              احتياجاتكم. سواء كنتم تبحثون عن فنادق فاخرة، أو رحلات مميزة، أو
              فعاليات شيقة، نحن هنا لنقدم لكم تجربة سفر لا تُنسى.
            </p>
          </div>
          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="text-lg font-medium text-black">روابط سريعة</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-black">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-black">
                  الفنادق
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-black">
                  عروض
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-black">
                  فعاليات
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-black">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-black">معلومات الاتصال</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-bold text-gray-400">العنوان:</span> شارع
                السلام، المدينة، الدولة
              </li>
              <li>
                <span className="font-bold text-gray-400">الهاتف:</span> +123
                456 789
              </li>
              <li>
                <span className="font-bold text-gray-400">
                  البريد الإلكتروني:
                </span>{" "}
                info@example.com
              </li>
            </ul>
            <div className="mt-6 flex justify-center space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-black">
                <FaSnapchat className="h-6 w-6" />
                <span className="sr-only">سناب شات</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <FaWhatsapp className="h-6 w-6" />
                <span className="sr-only">واتساب</span>
              </a>
              <a
                href="tel:+123456789"
                className="text-gray-400 hover:text-black"
              >
                <FaPhone className="h-6 w-6" />
                <span className="sr-only">هاتف</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <FaFacebook className="h-6 w-6" />
                <span className="sr-only">فيسبوك</span>
              </a>

              <a href="#" className="text-gray-400 hover:text-black">
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">إنستغرام</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-800">
            &copy; 2024{" "}
            <a
              href="https://gaoba.vercel.app/"
              className=" text-blue-500 font-bold"
            >
              Gaoba
            </a>
            . جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
