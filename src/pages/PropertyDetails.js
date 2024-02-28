import React from 'react';

// import data
import { housesData } from '../data';

// import use params
import { useParams } from 'react-router-dom';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

// import 
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();
  
  // get the house based on the id
const house = housesData.find((house) => {
  return house.id === parseInt(id);
});

console.log(house);

  return <div>PropertyDetails</div>;
};


export default PropertyDetails;
