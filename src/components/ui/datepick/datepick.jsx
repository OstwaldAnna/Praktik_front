import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepick.css'
import { ru } from "date-fns/locale";
const Datepick = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-full">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Дата рождения"
        dateFormat="dd.MM.yyyy"
        maxDate={new Date()}
        locale={ru}
        wrapperClassName="w-full"
        className="w-full bg-transparent placeholder:text-[accent-text] border border-[#E2E8F0] rounded-lg
                   py-2.5 px-4 transition duration-300 ease focus:outline-none 
                   focus:border-slate-400 hover:border-slate-400"
        calendarClassName="react-datepicker"
      />
    </div>
  );
};

export default Datepick;
