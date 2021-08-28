const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)

test('A aplicação deve responder na porta 3131', () => {
    return request.get("/").then(res => expect(res.statusCode).toEqual(200))

    // var res = await request.get("/")
    // expect(res.statusCode).toEqual(200)
})

test('Deve retornar azul como cor favorita do Vinícius', () => {
    return request.get("/cor/vinicius").then(res => expect(res.body.cor).toEqual("azul"))
})





// const app = require('../src/app')

// describe("Operações básicas", () => {
//     test('Deve retornar o valor 10 ao somar 5 + 5', () => {
//         var resultado = app.soma(5, 5)

//         expect(resultado).toEqual(10)
//     })

//     test('Deve retornar o valor 10 ao multiplicar 2 * 5', () => {
//         var resultado = app.mult(2, 5)

//         expect(resultado).toEqual(10)
//     })
// })