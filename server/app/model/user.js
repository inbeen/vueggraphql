module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        id: { type: INTEGER, autoIncrement: true, primaryKey: true },
        username: STRING(32),
        password: STRING(32),
        created_at: DATE,
        updated_at: DATE,
    });

    User.associate = () => {
        app.model.User.hasMany(app.model.Post, { foreignKey: 'user_id', targetKey: 'id' });
    };

    return User;
};
