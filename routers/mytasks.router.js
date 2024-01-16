const taskController=require('../controllers/task.controller')
const router=require('express').Router()
const guardAuth=require('./guard.auth')


router.get('/',taskController.getMyTasksController)
router.get('/delete/:id',taskController.deleteMyTaskController)
router.get('/update/:id',taskController.updateTaskController)
router.post('/update/:id',guardAuth.isAuth,taskController.postUpdateTaskController)




module.exports=router