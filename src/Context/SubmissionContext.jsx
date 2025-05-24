import React, { createContext, useContext, useState } from "react";

const SubmissionContext = createContext();

export const useSubmissions = () => useContext(SubmissionContext);

export const SubmissionProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([]);

  const addSubmission = (newSubmission) => {
    const timestamp = new Date().toLocaleString();
    setSubmissions((prev) => [...prev, { ...newSubmission, timestamp }]);
  };

  return (
    <SubmissionContext.Provider value={{ submissions, addSubmission }}>
      {children}
    </SubmissionContext.Provider>
  );
};
