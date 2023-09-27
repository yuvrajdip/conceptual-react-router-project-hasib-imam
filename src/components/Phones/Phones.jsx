import React from 'react';
import Phone from './Phone';

const Phones = ({ phones }) => {


  return (
    <div className='text-center'>
      <h2>All Category Phones</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
        {
          phones?.map(phone => <Phone phone={phone} key={phone.id}></Phone>)
        }
      </div>
    </div>
  );
};

export default Phones;