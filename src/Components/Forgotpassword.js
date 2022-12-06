import React from 'react'
import { Link} from "react-router-dom";

const Forgot1_password = () => {
  return (
    <div className="container">

        {/*<!-- Outer Row -->*/}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/*<!-- Nested Row within Card Body -->*/}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-2">Recuperar contraseña</h1>
                                        <p className="mb-4">Introduce la dirección de correo electrónico asociada a tu cuenta y te enviaremos un correo para restablecer tu contraseña.</p>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Correo electrónico"/>
                                        </div>
                                        <Link to="/Login" className="btn btn-primary btn-user btn-block">
                                            Enviar
                                        </Link>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <Link to="/Register" className="small">¿Aún no tienes cuenta?</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/Login" className="small">¿Ya tienes cuenta? Entra aquí!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}
export default Forgot1_password