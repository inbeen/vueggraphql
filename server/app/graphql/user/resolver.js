module.exports = {
    Query: {
        viewer(root, {}, ctx) {
            const { id } = ctx.service.user.fetchByToken(ctx.headers.authorization);
            if (!id) throw new Error('No authorized');
            return ctx.connector.user.fetchById(id);
        },

        user(root, { id }, ctx) {
            return ctx.connector.user.fetchById(id);
        },
    },
    User: {
        posts(root, {}, ctx) {
            return ctx.connector.post.fetchByIds(root.posts.map(p => p.id));
        }
    },
    Mutation: {
        async register(root, { username, password }, ctx) {
            const user = await ctx.connector.user.create({ username, password });
            const token = ctx.service.user.getToken(user);
            return { ...user, token };
        },
        async login(root, { username, password }, ctx) {
            const user = await ctx.connector.user.fetchByUsername(username);
            if (!user) throw new Error('No user with that username');
            if (user.password != password) throw new Error('Incorrect password');
            const token = ctx.service.user.getToken(user);
            return { ...user, token };
        },
    }
};
