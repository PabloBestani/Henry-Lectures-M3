const {sumar, esIgual, getUser} = require("../index");





// beforeAll(() => {
//     console.log("Antes que todos los tests");
// })

//test unitario
describe("PRIMERA PRUEBA", () => {
    it("Mi primer test", () => {});
})


describe("FUNCION SUMAR", () => {

    // beforeEach(() => {
    //     console.log("Me ejecuo antes de cada test de forma individual");
    // })


    it("es una funcion", () => {
        expect(typeof sumar === 'function').toEqual(true);
    });

    it("suma los valores correctamente", () => {
        expect(sumar(3, 5)).toEqual(8);
    });
    
    it("envia un error si recibe valores negativos", () => {
        const negativo = -1;
        expect(() => sumar(negativo, 3)).toThrow("Solo valores positivos porfis");

    })
});


describe("FUNCION ESIGUAL", () => {
    it("Funciona?", () => {
        expect(esIgual()).toEqual([1, 2, 3]);
    })
})

describe("FUNCION GETUSER", () => {
    it("trae al usuario correcto", () => {
        return getUser().then(data => {
            expect(data.name).toBe("Leanne Graham");
            expect(data.id).toBe(1);
        })
    })
})


describe("FUNCION MOCK", () => {
    const mockSuma = jest.fn((a, b) => sumar(a, b));
    mockSuma(1, 4);
    mockSuma(3, 5);

    console.log(mockSuma.mock.results);
})


