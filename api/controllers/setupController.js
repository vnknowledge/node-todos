const Todos = require('../models/todoModel');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        let seedTodos = [
            {
                text: "Learn Node.js",
                stage: false
            },
            {
                text: "Learn AngularJS",
                stage: false
            },
            {
                text: "Build a application",
                stage: false
            }
        ];

        let promise = new Promise((resolve, reject) => {
            resolve(Todos.create(seedTodos));
        });

        promise.then((results) => {
            res.send(results);
        }).catch((err) => {
            throw new Error(err.message());
        });
    });
}