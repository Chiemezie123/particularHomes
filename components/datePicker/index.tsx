import React, { useRef, useState } from "react";
import { DateIcon } from "@/assets/svg";
import { cn } from "@/utils/helper";

const DateSelector = () => {

  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const containerInputRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false); // State for border
 

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    setIsActive(false); // Remove the active border after selecting a date
  };

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); 
      containerInputRef.current?.focus();
      setIsActive(true);// Programmatically show the date picker
    }
  };



  return (
    <div ref={containerInputRef}  className={`flex h-[56px] p-[8px_8px_8px_16px] justify-between items-center flex-1 rounded-[8px] border bg-white ${
      isActive
        ? "border-[#008273] border-[2px]"
        : "border-[#DFDFDF]"
    }`}>
      <input
        ref={dateInputRef}
        type="date"
        className="appearance-none w-full text-[14px] font-poppins font-normal  text-[#008273] outline-none border-none bg-transparent cursor-pointer"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="Select a date"
        style={{
          background: "transparent",
          // display: 'none',
        }}
      />
      <div className="cursor-pointer" onClick={openDatePicker}>
        <DateIcon />
      </div>
    </div>
  );
};

export default DateSelector;
