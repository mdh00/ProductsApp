import React from "react";

interface CardProps {
  image: string;
  complainId: string;
  customerMail: string;
  orderId: string;
}

const ImageCard: React.FC<CardProps> = ({
  image,
  complainId,
  customerMail,
  orderId,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="mr-2">
          <img src={image} alt="Image" className="w-full h-auto" />
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Complain ID: {complainId}</p>
        <p className="text-sm text-gray-500">Customer Mail: {customerMail}</p>
        <p className="text-sm text-gray-500">Order ID: {orderId}</p>
      </div>
    </div>
  );
};

export default ImageCard;
