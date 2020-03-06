const {Router} = require('express');
const tasksRouting = require('./task');
const router = new Router();

router.use('/tasks', tasksRouting);

module.exports = router;