import { validateLogin } from "./assets/js/validations/validateLogin.js";
import { validateEmail } from "./assets/js/validations/validateLogin.js";


describe("validateLogin", () => {
    it ("deberia retornar false en caso de que el campo este vacio", () => {
        expect(validateLogin("", "123456").toBe(false));
        expect(validateLogin("hola@example.com", "").toBe(false));
    });

})

describe("validateEmail", () => {
    it("xxxxxx", () => {
        expect(validateEmail("nosoyuncorreo.com").toBe(false));
    });
})



//Buscar expresiones regulares para validar el correo
//pintar error() en el auth dom js para pintar los errores de los test