import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TravelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    numberOfPeople: "",
    hasChildren: false,
    numberOfChildren: "",
    childrenAges: [],
    startDate: "",
    endDate: "",
    numberOfDays: "",
    withBreakfast: false,
    whatsappNumber: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChildrenAgeChange = (index, value) => {
    const newChildrenAges = [...formData.childrenAges];
    newChildrenAges[index] = value;
    setFormData({ ...formData, childrenAges: newChildrenAges });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the message to be sent via WhatsApp
    let message = `👤 الاسم: ${formData.name}\n`;
    message += `👥 عدد الأشخاص: ${formData.numberOfPeople}\n`;
    if (formData.hasChildren) {
      message += `👶 عدد الأطفال: ${formData.numberOfChildren}\n`;
      message += `👶 أعمار الأطفال: ${formData.childrenAges.join(", ")}\n`;
    }
    message += `📅 عدد الأيام: ${formData.numberOfDays}\n`;
    message += `🛫 تاريخ البدء: ${formData.startDate}\n`;
    message += `🛬 تاريخ الانتهاء: ${formData.endDate}\n`;
    message += formData.withBreakfast ? `🥐 يشمل الإفطار\n` : "";
    message += `📱 رقم الواتساب: ${formData.whatsappNumber}`;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/79174828474?text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp link to send the message
    window.open(whatsappUrl, "_blank");

    // Show success message and reset form
    toast.success("تم إرسال الطلب بنجاح عبر واتساب!");
    setFormData({
      name: "",
      numberOfPeople: "",
      hasChildren: false,
      numberOfChildren: "",
      childrenAges: [],
      startDate: "",
      endDate: "",
      numberOfDays: "",
      withBreakfast: false,
      whatsappNumber: "",
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className=" text-2xl font-bold text-indigo-600 mb-4 tracking-wide uppercase">
            حجز رحلة
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            املأ النموذج أدناه, لتأكيد حجزك سيتم التواصل معك
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
                autoComplete="name"
                placeholder="الاسم"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="numberOfPeople" className="sr-only">
                عدد الأشخاص
              </label>
              <input
                type="number"
                name="numberOfPeople"
                id="numberOfPeople"
                placeholder="عدد الأشخاص"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="hasChildren"
                id="hasChildren"
                checked={formData.hasChildren}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="hasChildren"
                className="ml-2 block text-sm text-gray-900"
              >
                هل لديك أطفال؟
              </label>
            </div>
            {formData.hasChildren && (
              <>
                <div>
                  <label htmlFor="numberOfChildren" className="sr-only">
                    عدد الأطفال
                  </label>
                  <input
                    type="number"
                    name="numberOfChildren"
                    id="numberOfChildren"
                    placeholder="عدد الأطفال"
                    value={formData.numberOfChildren}
                    onChange={(e) => {
                      handleChange(e);
                      setFormData({
                        ...formData,
                        childrenAges: new Array(parseInt(e.target.value)).fill(
                          ""
                        ),
                      });
                    }}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                {formData.childrenAges.map((age, index) => (
                  <div key={index}>
                    <label htmlFor={`childAge${index}`} className="sr-only">
                      عمر الطفل {index + 1}
                    </label>
                    <input
                      type="number"
                      name={`childAge${index}`}
                      id={`childAge${index}`}
                      placeholder={`عمر الطفل ${index + 1}`}
                      value={age}
                      onChange={(e) =>
                        handleChildrenAgeChange(index, e.target.value)
                      }
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                ))}
              </>
            )}
            <div>
              <label htmlFor="numberOfDays" className="sr-only">
                عدد الأيام
              </label>
              <input
                type="number"
                name="numberOfDays"
                id="numberOfDays"
                placeholder="عدد الأيام"
                value={formData.numberOfDays}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="startDate" className="sr-only">
                من
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="sr-only">
                إلى
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="withBreakfast"
                id="withBreakfast"
                checked={formData.withBreakfast}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="withBreakfast"
                className="ml-2 block text-sm text-gray-900"
              >
                مع الإفطار؟
              </label>
            </div>
            <div>
              <label htmlFor="whatsappNumber" className="sr-only">
                رقم الواتساب
              </label>
              <input
                type="tel"
                name="whatsappNumber"
                id="whatsappNumber"
                placeholder="رقم الواتساب"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TravelForm;
