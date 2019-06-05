import { validateLogin, validateEmail } from '../src/assets/js/validateLogin.js';

describe("función validate", () =>{
    it('debería retornar false', () =>{
        expect(validateLogin("", "123456")).toBe(false);
        expect(validateLogin("agatha@agatha.com", "")).toBe(false);
        expect(validateLogin("","")).toBe(false);
        expect(validateLogin("agatha@agatha.com", "123456")).toBe(true);
        expect(validateLogin("agatha@agatha.com", "12345")).toBe(false);        
    })
})

describe("función validateEmail", () => {
    it("debería retornar false", () => {
        expect(validateEmail("estonoesuncorreo.com")).toBe(false);
        expect(validateEmail("estonoesun@correo")).toBe(false);
        expect(validateEmail("estonoesuncorreocom")).toBe(false);
        expect(validateEmail("undefined")).toBe(false);
    })
    it("debería retornar true", () => {
        expect(validateEmail("efyguevara@gmail.com")).toBe(true);
    })
})
