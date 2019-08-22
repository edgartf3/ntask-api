module.exports = {
    database: "ntask",
    username: "root",
    password: "fx870",
    params: {
        dialect: "mysql",
        host:"localhost",
        logging: false,
        port:3306,
        define: {
            underscored: true
        }
    },
    jwtSecret: "NTASK_TEST",
    jwtSession: { session: false }
};