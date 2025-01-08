import React, { useState } from 'react';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event:any) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='flex h-[56px] p-[8px_8px_8px_16px] justify-between items-center flex-1 rounded-[8px] border border-[#DFDFDF] bg-white'>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="Select a date"
      />
    </div>
  );
};

export default DateSelector;
