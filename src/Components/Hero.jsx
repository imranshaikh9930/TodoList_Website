import { useEffect, useState } from "react";
import { useSubmissions } from "../Context/SubmissionContext";
import card from "../assets/Card.png";
import google from "../assets/google.png";
import youtube from "../assets/youtube1.png";
import facebook from "../assets/facebook1.png";
import pinterest from "../assets/pinterest.png";
import twitch from "../assets/twitch.png";
import Form from "./Form";

const socialImages = [google, facebook, youtube, pinterest, twitch];


const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    languages: [],
  });

  const { addSubmission } = useSubmissions();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "languages") {
      const updatedLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter((lang) => lang !== value);
      setFormData({ ...formData, languages: updatedLanguages });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubmission(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      languages: [],
    });
    setShowForm(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

 useEffect(() => {
  if (showForm || showThankYou) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return () => {
    document.body.style.overflow = "unset";
  };
}, [showForm, showThankYou]);


  return (
    <div className="w-[85vw] max-w-screen-xl mx-auto space-y-10 px-4 md:px-0 py-10 select-none">

      <div className="text-center max-w-5xl mx-auto">
        <h3 className="text-4xl lg:text-5xl font-bold text-[#170F49]">
          Simplify Your Life with Our <br className="hidden sm:block" /> Todo
          App
        </h3>
        <p className="text-sm sm:text-base mt-4 text-[#6F6C90]">
          Stay organized and boost your productivity with our intuitive todo
          website.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6">
          <button
            className="bg-[#FF3E54] text-white rounded-full px-8 py-3 hover:opacity-90"
            onClick={() => setShowForm(true)}
          >
            Get Started
          </button>
          <button className="text-[#FF3E54] bg-white border-2 border-[#FF3E54] rounded-full px-8 py-3 hover:opacity-90">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-[85vw] flex flex-col lg:flex-row items-center justify-center p-4 sm:p-4 md:p-14 gap-6">
        {/* Left Section */}
        <div className="bg-[#ff4d4d] text-white p-6 md:p-10 lg:p-12 rounded-xl w-full max-w-2xl lg:w-[770px] h-auto lg:h-[550px] flex flex-col justify-center sm:justify-between">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="opacity-50">Organize.</span>
            <br />
            Achieve.
            <br />
            Relax.
          </h1>
          <p className="text-base md:text-lg mt-4 md:mt-5 text-slate-200">
            Turn clutter into clarity, chaos into control, and dreams into
            done.bold <br /> visions into market success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm sm:text-base">
              Get Started Today
            </button>
            <button className="bg-red-400 text-white px-6 py-3 rounded-full text-sm sm:text-base">
              Discover Features
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:flex-1 flex justify-center">
          <div className="relative w-full max-w-2xl h-[400px] sm:h-[500px] md:h-[580px] lg:h-[550px]">
            <img
              src={card}
              alt="Card"
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-sm sm:text-base">Freddie Halvorson</p>
              <p className="text-xs sm:text-sm">
                Chief Productivity Enthusiast
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-start gap-4 sm:justify-between sm:gap-4 w-full md:w-[80vw] sm:mx-auto">
        {socialImages.map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={`social-${index}`}
            className="w-24 sm:w-[120px] h-10 object-contain"
          />
        ))}
      
      </div>

      {showForm && (
        <Form
          setShowForm={setShowForm}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {showThankYou && (
        <div className="fixed inset-0 -top-10 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-h-[90vh] overflow-y-auto">
            <h1 className="text-3xl p-2">❤️</h1>
            <h3 className="text-lg font-semibold p-2">
              Thank you for connecting with us.
            </h3>
            <p className="text-sm p-1 text-[#424242]">
              Our team will contact you soon.
            </p>
            <button
              className="bg-[#FF3E54] w-full text-white py-2 px-2 rounded-md"
              onClick={() => setShowThankYou(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;