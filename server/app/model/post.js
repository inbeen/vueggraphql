module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Post = app.model.define('post', {
        id: { type: INTEGER, autoIncrement: true, primaryKey: true },
        title: STRING(32),
        content: STRING(255),
        user_id: INTEGER,
        created_at: DATE,
        updated_at: DATE,
    });

    Post.associate = () => {
        app.model.Post.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'id' });
    };

    return Post;
};