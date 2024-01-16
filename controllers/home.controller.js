const taskModel=require('../models/task.model')

exports.threeTaskController=(req,res,next)=>{
    taskModel.getThreeTasks().then(tasks=> {
        res.render('index',{
            tasks:tasks,
            verifUser:req.session.userId})
    })

}