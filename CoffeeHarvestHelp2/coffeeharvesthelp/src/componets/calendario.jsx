import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

import {useState} from 'react'

function Calendar() {
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
      
    return(
       <>
        <DateRange
          ranges={[state.selection1, state.selection2, state.selection3]}         
        />
        
        </> 
    )
    
}
export default Calendar
