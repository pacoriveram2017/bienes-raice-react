import '../css/register.css';

const Register = () =>{

    return(
        <>
        <section className="register-section container-fluid">
            <div className="row register-form">
                <h3>Registro de nueva cuenta</h3>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 alert-message">
                    <div className="alert alert-success" role="alert">
                        Ingrese sus credenciales de acceso.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Nombre(s)</label>
                    <input type="text" className="form-control" id="txtName" placeholder="Ingresa tu nombre(s)"/>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Apellido(s)</label>
                    <input type="text" className="form-control" id="txtLastName" placeholder="Ingresa tu(s) apellidos(s)"/>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Número de teléfono</label>
                    <input type="text" className="form-control" id="txtPhone" placeholder="Ingresa tu número de teléfono"/>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Correo electrónico</label>
                    <input type="text" className="form-control" id="txtEmail" placeholder="Ingresa tu correo electrónico"/>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-data">
                    <button type="submit" className="btn btn-primary btn-submit-register">Registrar</button>
                </div>
            </div>
        </section>
        </>
    )

}

export default Register;
