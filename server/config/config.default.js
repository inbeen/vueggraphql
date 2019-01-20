exports.keys = 'abcdefghijklmnopqrstuvwxyz';

// orm
exports.sequelize = {
    dialect: 'postgres',
    database: 'db',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: '123456',
    operatorsAliases: false
}

// graphql
exports.graphql = {
    router: '/graphql',
    app: true,
    agent: false,
    graphiql: true,
    onPreGraphQL: async ctx => {},
    onPreGraphiQL: async ctx => {},
}

// middlewares
exports.middleware = ['graphql'];

// security
exports.security = {
    csrf: {
        ignore: () => true,
    }
}

// cors
exports.cors = {
    origin: '*',
}
