import React from 'react'
import { Link } from 'react-router-dom'

export const Tabla = () => {
  return (
    
  <div>
    {/*<!-- Page Heading -->*/}
    <h1 className="h3 mb-2 text-gray-800">Plataforma Recogida de Paquetes</h1>
    <p className="mb-4">Aquí podras registar y actualizar tus envíos.</p>
    <Link to="/Login" className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Cerrar sesión
                                </Link>
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <Link to="/Createorder" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Crear nueva orden</Link>
                    </div>                         
    

    {/*<!-- DataTales Example -->*/}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Ordenes y estados de envíos</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Guía</th>
                            <th>Identificación</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Ciudad</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    {/*<tfoot>
                        <tr>
                            <th>Guía</th>
                            <th>Identificación</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Ciudad</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </tfoot>*/}
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>111111111</td>
                            <td>Juanito Perez</td>
                            <td>Calle 1 #2-3</td>
                            <td>Bogotá D.C</td>
                            <td>30/11/2022</td>
                            <td>Guardado</td>
                        </tr>                      
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
)
}