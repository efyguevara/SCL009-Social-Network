import { validateEmail, validatePassword } from '../src/assets/js/validateLogin.js';
import { validateEmailCheckin, validatePasswordCheckin, validatePasswordRepeat } from '../src/assets/js/validateCheckin.js';

describe("función validateEmail", () =>{
    it("debería retornar false", () => {
        expect(validateEmail("estonoesuncorreo.com")).toBe(false);
        expect(validateEmail("estonoesun@correo")).toBe(false);
        expect(validateEmail("estonoesuncorreocom")).toBe(false);
        expect(validateEmail("")).toBe(false);
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

// Faltan test de validateEmailCheckin, validatePasswordCheckin y validatePasswordRepeat.