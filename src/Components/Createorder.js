import React from 'react'
import { Link} from "react-router-dom";

export const Createorder = () => {
  return (
    <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <div className="col-lg-0 d-none d-lg-block"></div>
                    <div className="col-lg-12">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h3 text-gray-900 mb-4">Registro de orden</h1>
                            </div>
                            <form className="user">
                            {/*Fecha y Hora*/}
                            <div className="form-group row">
                                    <div className="col-center-mb-3">
                                     <h1 className="h5 text-gray-900 mb-0">Fecha</h1>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control form-control-user" id="date"/>
                                    </div>
                                    <div className="col-center-mb-3">
                                     <h1 className="h5 text-gray-900 mb-0">Hora</h1>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control form-control-user" id="hour"/>
                                    </div>
                                </div>

                                {/*Dimensiones*/}
                                <hr/>
                             
                                <div className="form-group row">
                                    <div className="col-sm-2 mb-3 mb-sm-0">
                                        <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Largo (Cm)</h1>
                                        </div>
                                        <input type="text" className="form-control form-control-user" id="alto"
                                            placeholder="30"/>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Ancho (Cm)</h1>
                                        </div>
                                        <input type="text" className="form-control form-control-user" id="ancho"
                                            placeholder="40"/>
                                    </div>
                                    <div className="col-sm-2 mb-3 mb-sm-0">
                                        <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Alto (Cm)</h1>
                                        </div>
                                        <input type="text" className="form-control form-control-user" id="alto"
                                            placeholder="45"/>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Peso (Kg)</h1>
                                        </div>
                                        <input type="text" className="form-control form-control-user" id="peso"
                                            placeholder="10"/>
                                    </div>
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="delicado"/>
                                        <label className="custom-control-label" htmlFor="customCheck">Mercancia delicada</label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Dirección de recogida</h1>
                                        </div>
                                        <input type="Direccion de recogida" className="form-control form-control-user"
                                            id="direccionrecogida" placeholder="Calle 1 #2-2"/>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Ciudad</h1>
                                        </div>
                                        <input type="password" className="form-control form-control-user"
                                            id="ciudadrecogida" placeholder="Bogotá D.C"/>
                                    </div>
                                </div>
                                                               
                                <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Datos del destinatario</h1>
                                        </div>
                                <hr/>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Nombre / Razon social</h1>
                                        </div>
                                        <input type="Direccion de recogida" className="form-control form-control-user"
                                            id="nombre" placeholder="Juanito Perez"/>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">CC / Nit</h1>
                                        </div>
                                        <input type="password" className="form-control form-control-user"
                                            id="identificacion" placeholder="11111111"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Dirección</h1>
                                        </div>
                                        <input type="Direccion de recogida" className="form-control form-control-user"
                                            id="direcciondestino" placeholder="Calle 1 #2-2"/>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="text-center">
                                        <h1 className="h5 text-gray-900 mb-0">Ciudad</h1>
                                        </div>
                                        <input type="password" className="form-control form-control-user"
                                            id="ciudaddestino" placeholder="Bogotá D.C"/>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                <Link to="/tabla" className="btn btn-primary btn-user btn-block">
                                    Crear orden
                                </Link>
                                </div>                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
