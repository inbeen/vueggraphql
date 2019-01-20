module.exports = {
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING } = Sequelize;
        await queryInterface.createTable('posts', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            title: STRING(32),
            content: STRING(255),
            user_id: INTEGER,
            created_at: DATE,
            updated_at: DATE,
        });
    },

    down: async queryInterface => {
        await queryInterface.dropTable('posts');
    },
};