import React from "react";
import Inputs from "../../components/aniadir/Inputs";
import Boton from "../../components/aniadir/Buttons";
function Añadir(props) {

    return (
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] xl:w-[80%] md:w-[90%] sm:w-[90%] 2xl:w-[60%] bg-[#DECBA4] mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl ">
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Añadir {props.nombre}</h2>
                    <form action={props.action}>
                        <Inputs para="#" texto="Tipo de Actividad" icono="fa-user" tipoInput="text" id="tipoActividad" />
                        <Inputs para="#" texto="Fecha" icono="fa-id-card" tipoInput="date" id="fecha" />
                        <Inputs para="#" texto="Descripcion" icono="fa-sack-dollar" tipoInput="text" id="descripcion" />
                        <Inputs para="#" texto="Valor Total" icono="fa-dollar-sign" tipoInput="number" id="valorTotal" />
                        <Inputs para="#" texto="Cantidad Jornales" icono="fa-envelope" tipoInput="number" id="cantidadJornales" />
                        <Inputs para="#" texto="Observaciones" icono="fa-mars-and-venus" tipoInput="text" id="observaciones" />
                        <Inputs para="#" texto="Kilos Vendidos" icono="fa-mars-and-venus" tipoInput="number" id="kilosVendidos" />
                        <Inputs para="#" texto="Kilos Aproximado Seco" icono="fa-mars-and-venus" tipoInput="number" id="kilosAproxSeco" />
                        <Inputs para="#" texto="Tipo de Medida" icono="fa-mars-and-venus" tipoInput="text" id="tipoMedida" />
                        <Inputs para="#" texto="Numero de Arboles" icono="fa-mars-and-venus" tipoInput="number" id="numeroArboles" />
                        <Inputs para="#" texto="Sobre Precio" icono="fa-mars-and-venus" tipoInput="number" id="sobrePrecio" />
                    </form>
                    <div className="flex justify-center">
                        <button className="my-5">
                            <Boton texto="Añadir Registro" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Añadir;