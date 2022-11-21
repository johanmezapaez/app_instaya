import React from 'react'
import { Link} from "react-router-dom";
export const Forgotpassword = () => {
  return (
    <div class="container">

        {/*<!-- Outer Row -->*/}
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        {/*<!-- Nested Row within Card Body -->*/}
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-2">Recuperar contraseña</h1>
                                        <p class="mb-4">Introduce la dirección de correo electrónico asociada a tu cuenta y te enviaremos un correo para restablecer tu contraseña.</p>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Correo electrónico"/>
                                        </div>
                                        <Link to="/Login" class="btn btn-primary btn-user btn-block">
                                            Enviar
                                        </Link>
                                    </form>
                                    <hr/>
                                    <div class="text-center">
                                        <Link to="/Register" class="small">¿Aún no tienes cuenta?</Link>
                                    </div>
                                    <div class="text-center">
                                        <Link to="/Login" class="small">¿Ya tienes cuenta? Entra aquí!</Link>
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
