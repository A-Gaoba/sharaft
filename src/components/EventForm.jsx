import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

const EventForm = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfTickets: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mqkozgdr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, event: event.name }),
      });

      if (response.ok) {
        toast.success("تم إرسال طلبك بنجاح!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          numberOfTickets: "",
          specialRequests: "",
        });
        onClose();
      } else {
        toast.error("حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.");
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 shadow-xl rounded-lg w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 tracking-wide uppercase">
            حجز {event.name}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            املأ النموذج أدناه لتأكيد حجزك، سيتم التواصل معك
          </p>
        </div>
        <div className="bg-white p-8 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                الاسم
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="الاسم"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                required
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
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                رقم الواتساب
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="رقم الواتساب"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="numberOfTickets" className="sr-only">
                عدد التذاكر
              </label>
              <input
                type="number"
                name="numberOfTickets"
                id="numberOfTickets"
                placeholder="عدد التذاكر"
                value={formData.numberOfTickets}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="specialRequests" className="sr-only">
                طلبات خاصة
              </label>
              <textarea
                name="specialRequests"
                id="specialRequests"
                rows="4"
                placeholder="طلبات خاصة أو ملاحظات"
                value={formData.specialRequests}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

EventForm.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EventForm;
