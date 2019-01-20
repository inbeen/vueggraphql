module.exports = {
    Query: {
        post(root, { id }, ctx) {
            return ctx.connector.post.fetchById(id);
        },
    },
    Post: {
        user(root, {}, ctx) {
            return ctx.connector.user.fetchById(root.user_id);
        }
    },
    Mutation: {
        createPost(root, { title, content, userId }, ctx) {
            return ctx.connector.post.create({ title, content, user_id: userId });
        },
    }
};
