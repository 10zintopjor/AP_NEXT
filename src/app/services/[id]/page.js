'use client';

import { useParams } from 'next/navigation';
import { services } from "../../data/servicesdata";
import Image from 'next/image';
import SchedulService from '../../components/SchedulService';

function getServiceById(id) {
  return services.find(service => service.id === id);
}

export default function FaucetDetails() {
  const params = useParams();
  const faucetId = params.id;

  const faucetService = getServiceById(faucetId);

  if (!faucetService) {
    return <div className="text-center text-red-500 mt-10">Service not found</div>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg m-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-customBlue mb-4">{faucetService.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{faucetService.description}</p>
        </div>
        <div className="flex justify-center mb-6">
          <Image src={faucetService.imageUrl} alt={faucetService.title} width={200} height={200} className="rounded-lg shadow-md" />
        </div>
        <p className="text-gray-600 leading-relaxed text-center mt-10">{faucetService.longDescription}</p>
      </div>
      <SchedulService />
    </>
  );
}
