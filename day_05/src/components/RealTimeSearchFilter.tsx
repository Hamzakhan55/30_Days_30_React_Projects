import React from 'react';
import { useState } from 'react';

const Data = [
  { id: 1, name: 'Hamza Khan' },
  { id: 2, name: 'Muhammad Imran' },
  { id: 3, name: 'Syed Ammar Sani' },
  { id: 4, name: 'Syed Muhammad Aish' },
  { id: 5, name: 'Hammad Khan' },
  { id: 6, name: 'Muhammad Haris' },
];

function RealTimeSearchFilter() {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const filtered = Data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Search People</h2>
        <input
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-gray-700 placeholder-gray-400 mb-6"
          type="text"
          placeholder="Type to search..."
          onChange={handleChange}
          value={search}
        />
        <ul className="space-y-3">
          {filtered.map((item) => (
            <li
              className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-blue-100 transition-all duration-200 border border-gray-200 hover:border-blue-300 cursor-pointer font-medium text-gray-700 hover:text-blue-700"
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RealTimeSearchFilter;
