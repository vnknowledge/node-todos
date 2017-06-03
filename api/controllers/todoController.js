const Todos = require('../models/todoModel');

let getTodos = (res) => {
    Todos.find((err, todos) => {
        if(err) {
            res.status(500).json(err);
        } else {
            res.json(todos)
        }
    });
};

module.exports = (app) => {
    app.get('/api/todos', (req, res) => {
        getTodos(res);
    });

    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({ _id: req.params.id }, (err, todo) => {
            if(err){ 
                throw err;
            } else {
                res.json(todo);
            }
        });
    });

    app.post('/api/todo', (req, res) => {
        let todo = {
            text: req.body.text,
            stage: req.body.stage
        };

        Todos.create(todo, (err, todo) => {
            if(err) {
                throw err;
            } else {
                getTodos(res);
            }
        });
    });

    app.put('/api/todo', (req, res) => {
        if (!req.body._id) {
            return res.status(500).send("ID is required");
        } else {
            Todos.update({ _id: req.body._id }, { text: req.body.text, stage: req.body.stage }, (err, todo) => {
                if(err) {
                    res.status(500).json(err);
                } else {
                    getTodos(res);
                }
            });
        }
    });

    app.delete('/api/todo/:id', (req, res) => {
        Todos.remove({ _id: req.params.id }, (err, todo) => {
            if(err) {
                res.status(500).json(err);
            } else {
                getTodos(res);
            }
        });
    });
}
