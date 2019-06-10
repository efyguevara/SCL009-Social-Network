<<<<<<< Updated upstream
import { validateEmail, validatePassword } from '../src/assets/js/validateLogin.js';
import { validateEmailCheckin, validatePasswordCheckin, validatePasswordRepeat } from '../src/assets/js/validateCheckin.js';
=======
import { validateEmail, validatePassword} from '../src/assets/js/validateLogin.js';
>>>>>>> Stashed changes

describe("función validateEmail", () =>{
    it("debería retornar false", () => {
        expect(validateEmail("estonoesuncorreo.com")).toBe(false);
        expect(validateEmail("estonoesun@correo")).toBe(false);
        expect(validateEmail("estonoesuncorreocom")).toBe(false);
        expect(validateEmail("")).toBe(false);
<<<<<<< Updated upstream
    })
    it("debería retornar true", () => {
        expect(validateEmail("hola@laboratoria.com")).toBe(true);
    })
})

describe("función validatePassword", () => {
    it("debería retornar false", () => {
        expect(validatePassword("")).toBe(false);
        expect(validatePassword("12345")).toBe(false);
    })
    it("debería retornar true", () => {
        expect(validatePassword("123456")).toBe(true);
    })
})
<<<<<<< HEAD

// Faltan test de validateEmailCheckin, validatePasswordCheckin y validatePasswordRepeat.
=======
    })
    it("debería retornar true", () => {
        expect(validateEmail("hola@laboratoria.com")).toBe(true);
    })
})

describe("función validatePassword", () => {
    it("debería retornar false", () => {
        expect(validatePassword("")).toBe(false);
        expect(validatePassword("12345")).toBe(false);
    })
    it("debería retornar true", () => {
        expect(validatePassword("1234567")).toBe(true);
    })
})
>>>>>>> Stashed changes
=======
>>>>>>> 1b1db29d6dfad6ce5ddd05e38cb87e8bc1413cb5
