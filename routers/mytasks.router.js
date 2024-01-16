const taskController=require('../controllers/task.controller')
const router=require('express').Router()
const guardAuth=require('./guard.auth')
const multer=require('multer')


router.get('/',taskController.getMyTasksController)
router.get('/delete/:id',taskController.deleteMyTaskController)
router.get('/update/:id',taskController.updateTaskController)
router.post('/update/:id',multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'assets/uploads')
        },
        filename:function(req,file,cb){
            cb(null,Date.now()+'-'+file.originalname)
        }
    })
    }).single('image'),
    guardAuth.isAuth,taskController.postUpdateTaskController)





module.exports=router