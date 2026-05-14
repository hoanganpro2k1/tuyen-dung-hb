'use client';

import React from 'react';
import CoreQuality from './CoreQuality';
import ExpertAdvisory from './ExpertAdvisory';
import InspiredLecturers from './InspiredLecturers';

const QualityExpert = () => {
  return (
    <section id="quality-expert" className="relative">
      <CoreQuality />
      <ExpertAdvisory />
      <InspiredLecturers />
    </section>
  );
};

export default QualityExpert;
