import React from "react";
import { Formik } from "formik";
import Inputs from "../componets/actualizar/Inputs";
import Boton from '../componets/actualizar/Button';

function ActualizarActividad(props) {


    return (
        <>
            <Formik 
            initialValues={{
                nombres:'gildardo',
                meses:"",
                descripcion: ''
            }}
            onSubmit={()=>{
                console.log("se ha enviado el formulario")
            }}
            >

                {({values, handleSubmit, handleChange, handleBlur})=>(
                                      
                )}

            </Formik>
        </>
        
    );
}
export default ActualizarActividad;