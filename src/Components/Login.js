import React from 'react'
import { Link} from "react-router-dom";
export const Login = () => {
  return (
    <div>
<div class="container">

{/*<!-- Outer Row -->*/}
  <div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                {/*<!-- Nested Row within Card Body -->*/}
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Iniciar sesión</h1>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Correo electrónico"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Contraseña"/>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox small">
                                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                        <label class="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <Link to="/index" class="btn btn-primary btn-user btn-block">
                                    Iniciar sesión
                                </Link>
                                <hr/>
                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Iniciar con Google
                                </a>
                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Iniciar con Facebook
                                </a>
                            </form>
                            <hr/>
                            <div class="text-center">
                                <Link to="/Forgotpassword" class="small">¿Olvidaste tu contraseña?</Link>
                            </div>
                            <div class="text-center">
                                <Link to="/Register" class="small">¿Aún no tienes cuenta?</Link>
                            </div>
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
