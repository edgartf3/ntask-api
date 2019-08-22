import { request } from "http";
import { isNullOrUndefined } from "util";

describe("Routes: Token", () => {
        
    describe("POST /token", () => { 
                
        const Users = app.db.modes.Users;
        beforeEach(done => {
            
            Users.destroy({where: {}})
            .then(() => Users.create({
                name: "john",
                email: "john@mail.net",
                password: "12345"
            }))
            .then(() => done());
        });

        describe("status 200", () => {
            it("returns authenticated user token", done => {
                request.post("/token")
                .send({
                    email:"john@mail.net",
                    password:"12345"
                })
                .expect(200)
                .end((err, res) => {
                    expect(res.body).to.include.keys("token");
                    done(err);
                });
            });
        });

        describe("status 401", () => {
            it("throws error when passaord id incorrect", done => {
                request.post("/token").send({
                    email:"john@email.net",
                    password:"SENHA_ERRADA"
                })
                .expect(401)
                .end((err, res) => {
                    done(err);
                });
            });

            it("throw error when email not exist", done => {
                request.post("/token").send({
                    email:"EMAIL_ERRADO",
                    password:"SENHA_ERRADA"
                })
                .expect(401)
                .end((err, res) => {
                    done(err);
                });
            })

            it("throw error when email and password are blank", done => {
                request.post("/token")
                .expect(401)
                .end((err, res) => {
                    done(err);
                });
            });
        });
    });
});
