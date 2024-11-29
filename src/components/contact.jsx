import { useState } from "react";
import { FaSnapchat, FaWhatsapp, FaPhone } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mqkozgdr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("تم إرسال الرسالة بنجاح!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.");
    }
  };

  return (
    <div
      className="relative bg-gradient-to-r from-red-700 via-red-500 to-red-800 py-12"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-gray-900 font-extrabold text-4xl tracking-wide mb-4">
            تواصل معنا
          </h2>
          <p className="mt-2 leading-8 font-extrabold tracking-tight text-white text-2xl">
            نحن هنا لمساعدتك
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto">
            إذا كان لديك أي استفسارات أو تحتاج إلى أي مساعدة، لا تتردد في
            التواصل معنا عبر النموذج أدناه أو عبر وسائل الاتصال المختلفة.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-gradient-to-r from-red-700 via-red-500 to-red-800 border p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-lg font-medium text-white">
                أرسل لنا رسالة
              </h3>
              <form onSubmit={handleSubmit} className="mt-6 ">
                <div className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      الاسم
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder="الاسم"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="البريد الإلكتروني"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      الرسالة
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="الرسالة"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    أرسل الرسالة
                  </button>
                </div>
              </form>
            </div>
            <div className="relative bg-gradient-to-r from-red-700 via-red-500 to-red-800 p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105 hidden md:block">
              <h3 className="text-lg font-medium text-white">
                معلومات الاتصال
              </h3>
              <ul className="mt-6 space-y-4 text-gray-200 text-right">
                <li>
                  <span className="font-bold">العنوان:</span> شارع السلام،
                  المدينة، الدولة
                </li>
                <li>
                  <span className="font-bold">الهاتف:</span> +123 456 789
                </li>
                <li>
                  <span className="font-bold">البريد الإلكتروني:</span>{" "}
                  info@example.com
                </li>
              </ul>
              <div className="mt-8 flex justify-center space-x-6 space-x-reverse">
                <a
                  href="https://www.snapchat.com/add/yourusername"
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  <FaSnapchat className="h-8 w-8" />
                  <span className="sr-only">سناب شات</span>
                </a>
                <a
                  href="https://wa.me/+79174828474"
                  className="text-green-500 hover:text-green-600"
                >
                  <FaWhatsapp className="h-8 w-8" />
                  <span className="sr-only">واتساب</span>
                </a>
                <a
                  href="tel:+123456789"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaPhone className="h-8 w-8" />
                  <span className="sr-only">هاتف</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
