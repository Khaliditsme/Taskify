
const {createTask,fetchAllTask,updateTaskById,deleteTaskId} = require('../Controllers/TaskController');
const router = require('express').Router();

// 1. To get All the task
router.get("/", fetchAllTask);


// 2. To create new task 
router.post('/', createTask);

// 3. To delete the task 
router.put('/:id',updateTaskById)

// 4. To delete the task
router.delete('/:id',deleteTaskId)
module.exports = router;