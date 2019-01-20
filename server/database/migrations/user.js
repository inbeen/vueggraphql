module.exports = {
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING } = Sequelize;
        await queryInterface.createTable('users', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            username: STRING(32),
            password: STRING(32),
            created_at: DATE,
            updated_at: DATE,
        });
    },

    down: async queryInterface => {
        await queryInterface.dropTable('users');
    },
};