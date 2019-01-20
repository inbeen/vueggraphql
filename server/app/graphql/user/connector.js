const DataLoader = require('dataloader');

class UserConnector {
    constructor(ctx) {
        this.ctx = ctx;
        this.loader = new DataLoader(this.fetch.bind(this));
    }

    fetch(ids) {
        const users = this.ctx.app.model.User.findAll({
            where: {
                id: {
                    [this.ctx.app.Sequelize.Op.in]: ids,
                },
            },
            include: {
                model: this.ctx.app.model.Post
            }
        }).then(us => us.map(u => u.toJSON()));
        return users;
    }

    async fetchById(id) {
        return await this.loader.load(parseInt(id));
    }

    async fetchByIds(ids) {
        return await this.loader.loadMany(ids);
    }

    async fetchByUsername(username) {
        const user = await this.ctx.app.model.User.findOne({
            where: {
                username
            }
        });
        return user.toJSON();
    }

    async create(data) {
        const user = await this.ctx.app.model.User.create(data);
        return user.toJSON();
    }

}

module.exports = UserConnector;
