import { validateEmail, validatePassword } from '../src/assets/js/validateLogin.js';
import { validateEmailCheckin, validatePasswordCheckin, validatePasswordRepeat } from '../src/assets/js/validateCheckin.js';

//Test para corroborar que el email ingresado cumpla con las condiciones de un correo válido
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

//Para testear que la contraseña ingresada sea válida 
describe("función validatePassword", () => {
    it("debería retornar false", () => {
        expect(validatePassword("")).toBe(false);
        expect(validatePassword("12345")).toBe(false);
    })
    it("debería retornar true", () => {
        expect(validatePassword("123456")).toBe(true);
    })
})


// Testea que el email ingresado en el checkin cumpla las condiciones de un email válido
describe("función validateEmailCheckin", () =>{
    it("debería retornar false", () => {
        expect(validateEmailCheckin("estonoesuncorreo.com")).toBeFalsy();
        expect(validateEmailCheckin("estonoesun@correo")).toBeFalsy();
        expect(validateEmailCheckin("estonoesuncorreocom")).toBeFalsy();
        expect(validateEmailCheckin("")).toBeFalsy();
    })
    it("debería retornar true", () => {
        expect(validateEmailCheckin("laboratoriaredsocial@example.com")).toBeTruthy();
    })
})

//Para testear que la contraseña ingresada sea válida 
describe("función validatePasswordCheckin", () => {
    it("debería retornar false", () => {
        expect(validatePasswordCheckin("")).toBeFalsy();
        expect(validatePasswordCheckin("12345")).toBeFalsy();
    })
    it("debería retornar true", () => {
        expect(validatePasswordCheckin("123456")).toBe(true);
    })
})


describe("función validatePasswordRepeat", () => {
    it("debería retornar false", () => {
        expect(validatePasswordRepeat("123456", "nosoniguales")).toBeFalsy();
    })
    it("debería retornar true", () => {
        expect(validatePasswordRepeat("passwordiguales", "passwordiguales")).toBeTruthy();
    })
})


// Si quiere probar que una función particular lanze un error cuando sea llamada use toThrow
// function compileAndroidCode() {
//     throw new ConfigError('usted usa el JDK erroneo');
//   }
// test('La compilacion de android va por buen camino', () => {
//     expect(compileAndroidCode).toThrow();
//     expect(compileAndroidCode).toThrow(ConfigError);
  
//     // Puede usar el mensaje de error exacto o regex
//     expect(compileAndroidCode).toThrow('Usa el  JDK equivocado');
//     expect(compileAndroidCode).toThrow(/JDK/);
//   });








// import { validateEmail, validatePassword } from '../src/assets/js/validateLogin.js';
// import { validateEmailCheckin, validatePasswordCheckin, validatePasswordRepeat } from '../src/assets/js/validateCheckin.js';

// //Test para corroborar que el email ingresado cumpla con las condiciones de un correo válido
// describe("función validateEmail", () =>{
//     it("debería retornar false", () => {
//         expect(validateEmail("estonoesuncorreo.com")).toBe(false);
//         expect(validateEmail("estonoesun@correo")).toBe(false);
//         expect(validateEmail("estonoesuncorreocom")).toBe(false);
//         expect(validateEmail("")).toBe(false);
// <<<<<<< Updated upstream
//     })
//     it("debería retornar true", () => {
//         expect(validateEmail("hola@laboratoria.com")).toBe(true);
//     })
// })

// //Para testear que la contraseña ingresada sea válida 
// describe("función validatePassword", () => {
//     it("debería retornar false", () => {
//         expect(validatePassword("")).toBe(false);
//         expect(validatePassword("12345")).toBe(false);
//     })
//     it("debería retornar true", () => {
//         expect(validatePassword("123456")).toBe(true);
//     })
// })

//     })
//     it("debería retornar true", () => {
//         expect(validateEmail("hola@laboratoria.com")).toBe(true);
//     })
// })

// describe("función validatePassword", () => {
//     it("debería retornar false", () => {
//         expect(validatePassword("")).toBe(false);
//         expect(validatePassword("12345")).toBe(false);
//     })
//     it("debería retornar true", () => {
//         expect(validatePassword("1234567")).toBe(true);
//     })
// })



// // Testea que el email ingresado en el checkin cumpla las condiciones de un email válido
// describe("función validateEmailCheckin", () =>{
//     it("debería retornar false", () => {
//         expect(validateEmailCheckin("estonoesuncorreo.com")).toBeFalsy();
//         expect(validateEmailCheckin("estonoesun@correo")).toBeFalsy();
//         expect(validateEmailCheckin("estonoesuncorreocom")).toBeFalsy();
//         expect(validateEmailCheckin("")).toBeFalsy();
//     })
//     it("debería retornar true", () => {
//         expect(validateEmailCheckin("laboratoriaredsocial@example.com")).toBeTruthy();
//     })
// })

// //Para testear que la contraseña ingresada sea válida 
// describe("función validatePasswordCheckin", () => {
//     it("debería retornar false", () => {
//         expect(validatePasswordCheckin("")).toBeFalsy();
//         expect(validatePasswordCheckin("12345")).toBeFalsy();
//     })
//     it("debería retornar true", () => {
//         expect(validatePasswordCheckin("123456")).toBe(true);
//     })
// })


// describe("función validatePasswordRepeat", () => {
//     it("debería retornar false", () => {
//         expect(validatePasswordRepeat("123456", "nosoniguales")).toBeFalsy();
//     })
//     it("debería retornar true", () => {
//         expect(validatePasswordRepeat("passwordiguales", "passwordiguales")).toBeTruthy();
//     })
// })


// // Si quiere probar que una función particular lanze un error cuando sea llamada use toThrow
// // function compileAndroidCode() {
// //     throw new ConfigError('usted usa el JDK erroneo');
// //   }
// // test('La compilacion de android va por buen camino', () => {
// //     expect(compileAndroidCode).toThrow();
// //     expect(compileAndroidCode).toThrow(ConfigError);
  
// //     // Puede usar el mensaje de error exacto o regex
// //     expect(compileAndroidCode).toThrow('Usa el  JDK equivocado');
// //     expect(compileAndroidCode).toThrow(/JDK/);
// //   });
// >>>>>>> Stashed changes
