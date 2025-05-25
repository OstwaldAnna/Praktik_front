import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepick.css";
import { ru } from "date-fns/locale";
const Datepick = ({ selectedDate, onChange, placeholder, className, minDate, maxDate }) => {
    const isValidDate = selectedDate instanceof Date && !isNaN(selectedDate);
  return (
    <div className="w-full">
      <DatePicker
        selected={isValidDate ? selectedDate : null}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat="dd.MM.yyyy"
        minDate={minDate} // Управляется через проп
        maxDate={maxDate} 
        locale={ru}
        wrapperClassName="w-full"
        className={`w-full bg-transparent placeholder:text-[accent-text]  rounded-lg
                   py-2.5 px-4 transition duration-300 ease focus:outline-none 
                   focus:border-slate-400 hover:border-slate-400 ${className || ''}`}
        calendarClassName="react-datepicker"
      />
    </div>
  );
};

export default Datepick;
