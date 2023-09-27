import React from 'react';
import Phone from './Phone';

const Phones = ({phones}) => {
  

  return (
    <div>
      <h2>All Category Phones</h2>
      {
        phones?.map(phone=><Phone phone={phone} key={phone.id}></Phone>)
      }
    </div>
  );
};

export default Phones;