import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Calendario2 (){
    const [state, setState] = useState({
        selection1: {
          startDate: new Date("12/12/2020"),
          endDate: new Date("12/02/2020"),
          
        },
        selection2: {
          startDate: new Date("12/10/2020"),
          endDate: new Date("12/18/2020"),
          
        },
        selection3: {
            startDate: new Date("12/15/2020"),
            endDate: new Date("12/18/2020"),
            
        }
    });
    return (
      <DatePicker
        startDate={state.selection1.startDate}
        endDate={state.selection1.endDate}
        selected={startDate}
      onChange={onChange}
        inline
      />
    );
  };
  export default Calendario2