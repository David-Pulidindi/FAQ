import React from 'react';
import './CountSection.css'; // Import your CSS file if you have one
import NumberCounter from './NumberCounterCode';


function CountSection() {
  return (
    <section className="countSection">
      <h1 className="countSectionH1">
        <span className="number"><NumberCounter start={0} end={60} duration={3000} /><span className="plus">+</span></span>
        <span className="cities">Cities</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number"><NumberCounter start={0} end={30} duration={3000}/><span className="plus">k</span></span>
        <span className="cities">Riders</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number"><NumberCounter start={0} end={10} duration={3000}/><span className="plus">M</span></span>
        <span className="cities">Downloads</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number"><NumberCounter start={0} end={15} duration={3000} /><span className="plus">M</span></span>
        <span className="cities">Customers</span>
      </h1>
    </section>
  );
}

export default CountSection;
