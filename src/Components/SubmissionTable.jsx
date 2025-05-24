import React from 'react';
import { useSubmissions } from '../Context/SubmissionContext';

const SubmissionTable = () => {
  const { submissions } = useSubmissions();

  return (
    <div className="w-full md:w-[85vw] md:mx-auto px-4 md:px-8 lg:px-16 py-6 select-none">
      {submissions.length > 0 && (
        <div className="overflow-x-auto">
          <div className="min-w-[600px] w-full">
            <table className="w-full border border-gray-300 rounded-lg text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border text-left font-semibold text-nowrap">First Name</th>
                  <th className="py-3 px-4 border text-left font-semibold text-nowrap">Last Name</th>
                  <th className="py-3 px-4 border text-left font-semibold">Email</th>
                  <th className="py-3 px-4 border text-left font-semibold">Gender</th>
                  <th className="py-3 px-4 border text-left font-semibold text-nowrap">Languages</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((entry, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50 transition">
                    <td className="py-2 px-4 border">{entry.firstName}</td>
                    <td className="py-2 px-4 border">{entry.lastName}</td>
                    <td className="py-2 px-4 border">{entry.email}</td>
                    <td className="py-2 px-4 border">{entry.gender}</td>
                    <td className="py-2 px-4 border">{entry.languages.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionTable;
