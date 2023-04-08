import React from "react";

function Inputs(props) {
    
    return(
        
        <input name={props.nameInput} type={props.tipoInput} id={props.id} defaultValue={props.valueInput}  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" />
            
    )
}

export default Inputs 