import { validateLogin } from '../src/assets/js/validateLogin.js';

describe('función validate', () =>{
    it('debería retornar false', () =>{
        expect(validateLogin('', '123456')).toBe(false);
        expect(validateLogin('agatha@agatha.com', '')).toBe(false);
        expect(validateLogin('','')).toBe(false);
        expect(validateLogin('agatha@agatha.com', '123456')).toBe(true);
    });
});

describe("validateEmail", () => {
    it("deberia retornar false en caso de que el correo no tenga @", () => {
        expect(validateEmail("nosoyuncorreo.com")).toBe(false);
    });
})



//Buscar expresiones regulares para validar el correo
//pintar error() en el auth dom js para pintar los errores de los test