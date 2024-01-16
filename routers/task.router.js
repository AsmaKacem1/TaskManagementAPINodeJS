const taskController=require('../controllers/task.controller')
const guardAuth=require('./guard.auth')
const route = require('./auth.router')
const multer=require('multer')

const router=require('express').Router()

router.get('/',guardAuth.isAuth,taskController.getAllTaskController)



route.get('/addtask',guardAuth.isAuth,taskController.getAddTaskController)
route.post('/addtask',multer({
storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'assets/uploads')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})
}).single('image'),
guardAuth.isAuth,taskController.postAddTaskController)



module.exports=router