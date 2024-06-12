import React from 'react';

interface Roommate {
  id: number;
  name: string;
  age: number;
  interests: string;
  budget: number;
}

interface RoommateCardProps {
  roommate: Roommate;
}

const RoommateCard: React.FC<RoommateCardProps> = ({ roommate }) => {
  return (
    <div className="roommate-card">
      <h2>{roommate.name}</h2>
      <p>Age: {roommate.age}</p>
      <p>Interests: {roommate.interests}</p>
      <p>Budget: ${roommate.budget}</p>
    </div>
  );
};

export default RoommateCard;
