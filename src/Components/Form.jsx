import React, { useEffect, useState } from "react";

export default function Form({
  setShowForm,
  handleSubmit,
  formData,
  handleChange,
  showForm,
  showThankYou,
}) {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    terms: "",
  });

  const validateForm = (e) => {
    e.preventDefault();
    let newErrors = {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      terms: "",
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!e.target.elements.terms.checked) {
      newErrors.terms = "You must agree to the terms and conditions";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      handleSubmit(e);
    }
  };


  return (
    <div className="fixed sm:-inset-10 flex items-center justify-center sm:bg-black sm:bg-opacity-60 z-50 p-4 md:p-10 overflow-y-auto">
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Get Started Today</h2>
          <button
            onClick={() => setShowForm(false)}
            className="text-lg font-semibold text-gray-500 hover:text-red-600"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Fill in your details and take control of your tasks.
        </p>

        <form onSubmit={validateForm} className="space-y-4">
          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="font-bold">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full border px-4 py-2 rounded bg-[#FFDEE287] text-[#424242CC]"
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full sm:w-1/2">
              <label className="font-bold">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full border px-4 py-2 rounded bg-[#FFDEE287] text-[#424242CC]"
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="font-bold">Gender</label>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              {["male", "female"].map((g) => (
                <label
                  key={g}
                  className="bg-[#FFDEE287] text-[#424242CC] px-4 py-1 rounded cursor-pointer flex items-center"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {g[0].toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
            {errors.gender && (
              <p className="text-sm text-red-500 mt-1">{errors.gender}</p>
            )}
          </div>

          {/* Languages */}
          <div>
            <label className="font-bold">Languages</label>
            {["English", "Hindi", "Marathi"].map((lang) => (
              <div
                key={lang}
                className="flex items-center gap-2 bg-[#FFDEE287] mt-2 py-2 px-2 max-w-40 rounded"
              >
                <input
                  type="checkbox"
                  name="languages"
                  value={lang}
                  checked={formData.languages.includes(lang)}
                  onChange={handleChange}
                  className="accent-[#FF3E54]"
                />
                <label>{lang}</label>
              </div>
            ))}
          </div>

          {/* Email */}
          <div>
            <label className="font-bold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border px-4 py-2 rounded bg-[#FFDEE287]"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input type="checkbox" name="terms" />
            <p className="text-sm">
              I agree to the{" "}
              <span className="text-[#FF3E54] cursor-pointer underline">
                terms and conditions
              </span>
            </p>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-500 mt-1">{errors.terms}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#FF3E54] text-white w-full px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
