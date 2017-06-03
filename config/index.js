const config = require('./config');

module.exports = {
    getDbConnectionString: () => {
        // return `mongodb://${config.username}:${config.password}@localhost:27017/todos`;
        return `mongodb://${config.username}:${config.password}@ds111798.mlab.com:11798/todos`;
    }
}