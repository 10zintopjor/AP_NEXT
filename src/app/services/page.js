// pages/services.js
import React from 'react';

import tapImg from '../images/services/tap.png';
import faucetImg from '../images/services/faucet.png';
import basinImg from '../images/services/basin.png';
import toiletImg from '../images/services/toilet.png';
import brokenImg from '../images/services/broken.png';
import drainImg from '../images/services/drain.png';
import sewerImg from '../images/services/sewer.png';
import hotWaterImg from '../images/services/hot_water.png';
import waterProofingImg from '../images/services/water_proofing.png';
import sumpPumpImg from '../images/services/sum_pump.png';
import backflowImg from '../images/services/backflow.png';
import ServiceCard from '../components/Servicecard';
import SchedulService from '../components/SchedulService';

const icons = {
  "TAPS": tapImg,
  "FAUCETS": faucetImg,
  "SINKS": basinImg,
  "TOILETS": toiletImg,
  "PIPE REPLACEMENT": brokenImg,
  "PLUGGED DRAINS": drainImg,
  "BACKED UP SEWERS": sewerImg,
  "HOT WATER": hotWaterImg,
  "WATER PROOFING": waterProofingImg,
  "SUM PUMP": sumpPumpImg,
  "BACKFLOW PREVENTER": backflowImg
};

const services = [
  {
    title: "TAPS",
    description: "Installation and repair of all types of taps."
  },
  {
    title: "FAUCETS",
    description: "Professional faucet installation and repair services."
  },
  {
    title: "SINKS",
    description: "Expert sink installation and maintenance."
  },
  {
    title: "TOILETS",
    description: "Toilet installation, repair, and replacement."
  },
  {
    title: "PIPE REPLACEMENT",
    description: "Pipe replacement and repair services for all types of pipes."
  },
  {
    title: "PLUGGED DRAINS",
    description: "Clearing and cleaning of clogged drains."
  },
  {
    title: "BACKED UP SEWERS",
    description: "Sewer backup services to keep your system flowing."
  },
  {
    title: "HOT WATER",
    description: "Hot water system installation and repair."
  },
  {
    title: "WATER PROOFING",
    description: "Waterproofing services to protect your home."
  },
  {
    title: "SUM PUMP",
    description: "Installation and maintenance of sump pumps."
  },
  {
    title: "BACKFLOW PREVENTER",
    description: "Backflow preventer installation and testing."
  }
];

const Services = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4 mt-16 sm:mt-8">
          <h1 className="text-5xl font-bold text-center mb-8">Our Plumbing Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={icons[service.title]}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <SchedulService />
      
    </>
  );
}

export default Services;
