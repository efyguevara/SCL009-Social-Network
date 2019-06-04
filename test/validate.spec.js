import { validateLogin } from '../src/assets/js/validateLogin.js';

describe('función validate', () =>{
    it('debería retornar false', () =>{
        expect(validateLogin('', '123456').toBe(false));
        expect(validateLogin('agatha@agatha.com', '').toBe(false));
        expect(validateLogin('','').toBe(false));
        expect(validateLogin('agatha@agatha.com', '123456').toBe(true));
    });
});