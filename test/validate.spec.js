import { validateLogin } from '../src/assets/js/validateLogin.js';

describe("función validate", () =>{
    it('debería retornar false', () =>{
        expect(validateLogin("", "123456")).toBe(false);
        expect(validateLogin("agatha@agatha.com", "")).toBe(false);
        expect(validateLogin("","")).toBe(false);
        expect(validateLogin("agatha@agatha.com", "123456")).toBe(true);
        expect(validateLogin("agatha@agatha.com", "12345")).toBe(false);
        
    })
})

export const validateEmail = (email) => {
    let expRegular = RegExp(/^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
    return expRegular.test(email);
}

// export const validateEmail = (email) => {
//     let expRegular = RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
//     return expRegular.test(email);
// }