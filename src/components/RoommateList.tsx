import React from 'react';
import RoommateCard from './RoommateCard';

interface Roommate {
  id: number;
  name: string;
  age: number;
  interests: string;
  budget: number;
}

const RoommateList: React.FC = () => {
  const roommates: Roommate[] = [
    { id: 1, name: 'Alice', age: 25, interests: 'Cooking, Hiking', budget: 500 },
    { id: 2, name: 'Bob', age: 30, interests: 'Gaming, Reading', budget: 600 },
    // Add more roommate data here
  ];

  return (
    <div className="roommate-list">
      {roommates.map(roommate => (
        <RoommateCard key={roommate.id} roommate={roommate} />
      ))}
    </div>
  );
};

export default RoommateList;
