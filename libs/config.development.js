module.exports = {
    database: "ntask",
    username: "root",
    password: "fx870",
    params: {
        dialect: "mysql",
        host:"localhost",
        port:3306,
        define: {
            underscored: true
        }
    },
    jwtSecret: "ntask$K-ap1",
    jwtSession: { session: false }
};