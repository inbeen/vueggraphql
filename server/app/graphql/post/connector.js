const DataLoader = require('dataloader');

class PostConnector {
    constructor(ctx) {
        this.ctx = ctx;
        this.loader = new DataLoader(this.fetch.bind(this));
    }

    fetch(ids) {
        const posts = this.ctx.app.model.Post.findAll({
            where: {
                id: {
                    [this.ctx.app.Sequelize.Op.in]: ids,
                },
            },
            include: {
                model: this.ctx.app.model.User
            }
        }).then(pt => pt.map(p => p.toJSON()));
        return posts;
    }

    async fetchById(id) {
        return await this.loader.load(id);
    }

    async fetchByIds(ids) {
        return await this.loader.loadMany(ids);
    }

    async create(post) {
        return await this.ctx.app.model.Post.create(post);
    }

}

module.exports = PostConnector;
