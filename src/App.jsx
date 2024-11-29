import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/contact.jsx";
import Events from "./components/Events.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Home.jsx";
import Hotels from "./components/Hotels.jsx";

function App() {
  return (
    <div dir="rtl">
      <Hero />
      <AboutUs />
      <Hotels />
      <Events />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
