// src/components/CarpenterCard.tsx
import React from "react";

type Carpenter = {
  id: string;
  name: string;
  phone: string;
};

const CarpenterCard = ({ carpenter }: { carpenter: Carpenter }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{carpenter.name}</h2>
      <p className="text-gray-600">📞 {carpenter.phone}</p>
    </div>
  );
};

export default CarpenterCard;
