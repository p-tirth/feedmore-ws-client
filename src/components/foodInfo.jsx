import React from 'react';

const foodInfo = ({ obj }) => {
  return (
    <div className="bg-gray-900 p-4">
      <h2 className="text-white text-lg font-bold mb-4">Object Details</h2>
      <div className="text-white">
        <p><span className="font-bold">Name:</span> {obj.name}</p>
        <p><span className="font-bold">Address:</span> {obj.address}</p>
        <p><span className="font-bold">Veg:</span> {obj.veg ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default foodInfo;
