const session = require("supertest");
// const server = require("../index.js");
//*APLICAR ESTO AL SERVER DE LA LECT 02

//*genera un mock server que es facil de testear
const agent = session(server);

describe("GET /harry", () => {
    it("Responde con status 200", async() => {
        await agent.get("/harry".expect(200));
    });
})



