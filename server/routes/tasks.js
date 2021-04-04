const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    if(!req.session) {
      console.log("This user is not authenticated.")
      Task.find({userId: req._id})
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
    } else {
      console.log("This user is authenticated.")
      Task.find({userId: req._id})
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    
});

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const date = Date.parse(req.body.date);
    const category = req.body.category;

    let newTask = new Task({
        description,
        date,
        category
    });

    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    Task.findById(req.params.id)
        .then(task => {
            task.description = req.body.description;
            task.date = Date.parse(req.body.date);
            task.category = req.body.category;

            task.save()
              .then(() => res.json('Task updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;