import React from "react";

function Inputs(props) {

    return (
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor={props.id}>
                {props.texto}
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid ${props.icono}`}></i>
                </span>
                <input type={props.tipoInput} id={props.id} className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="" />
            </div>
        </div>
    )
}

export default Inputs 