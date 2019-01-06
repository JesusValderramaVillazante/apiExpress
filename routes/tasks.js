module.exports = app => {
    app.get("/tasks", (req, res) => {
        const Tasks = app.models.tasks;
        Tasks.findAll({}, (tasks) => {
            res.json({tasks: tasks});
        });
    });
};