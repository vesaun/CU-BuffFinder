import React, { useState } from 'react';

const SearchForm: React.FC = () => {
  const [distance, setDistance] = useState<string>('0-5');
  const [budget, setBudget] = useState<number | string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Distance:', distance, 'Budget:', budget);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="distance">Distance from Campus (miles):</label>
        <select 
          id="distance" 
          value={distance} 
          onChange={(e) => setDistance(e.target.value)}
        >
          <option value="0-5">0-5 miles</option>
          <option value="5-10">5-10 miles</option>
          <option value="10-15">10-15 miles</option>
          <option value="15-20">15-20 miles</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget">Budget:</label>
        <input 
          type="number" 
          id="budget" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)} 
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
