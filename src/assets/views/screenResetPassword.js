import { changePassword } from '../js/authFirebase.js';
import { screenLogin } from '../views/screenLogin.js'


export const screenResetPassword = () => {

    document.getElementById('root').innerHTML =
        `
    <section class="root-container">
        <div class="center">
            <a href="#"> <img src="assets/img/petlogo.png" alt="Logo Pet Lovers"></a>
        </div>
        <div id="containerForm" class="container">
            <form class="formfirt">
            <h2>Reestablecer contraseña</h2>
            <h4>Por favor ingrese su email para restaurar la contraseña</h4>
                <input type="email" id="emailResetPassword" placeholder="&#9993; correo@example.com" name="email">
                <p id="error-mail-reset-pass" class="err"></p>
                
                <!-- boton para solicitar el reestablecimiento de la contraseña -->
                <button type="button" class="button" id="btn_reset_pass" value="Cambiar Contraseña">Cambiar Contraseña</button>
                
                <!-- Boton para volver al login -->
                <button type="button" class="button" id="return-login">Volver</button>
            </form>
        </div>
    </section>
    `;

    //Envia email para cambiar la contraseña del usuario
    document.getElementById("btn_reset_pass").addEventListener("click", () => {
        let emailResetPass = document.getElementById("emailResetPassword").value;
        changePassword(emailResetPass);
        window.location.hash = '#/login';
    })

    //Devuelve al login
    document.getElementById("return-login").addEventListener("click", () => {
        screenLogin();
        window.location.hash = '#/login';
    })
}