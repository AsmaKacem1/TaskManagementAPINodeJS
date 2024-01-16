const taskController=require('../controllers/task.controller')
const guardAuth=require('./guard.auth')
const route = require('./auth.router')
const multer=require('multer')

const router=require('express').Router()



router.get('/',guardAuth.isAuth,taskController.getTasksController)



route.get('/addtask',guardAuth.isAuth,taskController.getAddTaskController)
route.post('/addtask',multer({
storage:multer.diskStorage({
    filename:function(req,cb){
        cb(null)
    }
})
}).single(),
guardAuth.isAuth,taskController.postAddTaskController)



module.exports=router