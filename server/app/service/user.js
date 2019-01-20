const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class UserService extends Service {
    fetchByToken(token) {
        if (token && token.split(' ')[0] === 'Bearer' || token.split(' ')[0] === 'Token') {
            if (token.split(' ')[1]) {
                const { data } = jwt.verify(token.split(' ')[1], this.ctx.app.config.keys);
                return data;
            }
        }
        return null;
    }

    getToken(user) {
        const token = jwt.sign({ data: user }, this.ctx.app.config.keys, { expiresIn: '1h' });
        this.ctx.headers.authorization = `Bearer ${token}`;
        return token;
    }
};

module.exports = UserService;
