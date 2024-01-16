const taskModel=require('../models/task.model')

exports.getAllTaskController=(req,res,next)=>{
    taskModel.getAllTasks().then(tasks=> {
        res.render('tasks',{
            tasks:tasks,
            verifUser:req.session.userId})
    })

}


exports.getAddTaskController=(req,res,next)=>{
    res.render('addtask',{verifUser:req.session.userId})
}

exports.postAddTaskController=(req,res,next)=>{
    taskModel.postDataTaskModel(req.body.title,req.body.description,req.body.status,req.body.due_date,req.session.userId).then((msg)=>{

        res.redirect('/addtask')
    }).catch((err)=>{
    
        res.redirect('/addtask')
    })
}


exports.getMyTasksController=(req,res,next)=>{
    taskModel.getMyTasks(req.session.userId).then((tasks)=>{
        res.render('mytasks',{mytasks:tasks,verifUser:req.session.userId})
    })
    
}

exports.deleteMyTaskController=(req,res,next)=>{
    let id=req.params.id
    taskModel.deleteMyTask(id).then((verif)=>{
        res.redirect('/mytasks')
    }).catch((err)=>{
        console.log(err)
    })
}

exports.updateTaskController=(req,res,next)=>{
    let id=req.params.id
    taskModel.getUpdateTaskModel(id).then((task)=>{
        res.render('updatetask',{myTask:task,verifUser:req.session.userId})
    })
    
}


exports.postUpdateTaskController=(req,res,next)=>{
    if (req.file){
        taskModel.postUpdateTaskModel(req.body.taskId,req.body.title,req.body.description,req.body.status,req.body.due_date,req.session.userId).then((msg)=>{
        
            res.redirect(`/mytasks/update/${req.body.taskId}`)
        }).catch((err)=>{
            
            res.redirect(`/mytasks/update/${req.body.taskId}`)
        })
    }else{
        taskModel.postUpdateTaskModel(req.body.taskId,req.body.title,req.body.description,req.body.status,req.body.due_date,req.session.userId).then((msg)=>{
            
            res.redirect(`/mytasks/update/${req.body.taskId}`)
        }).catch((err)=>{
            
            res.redirect(`/mytasks/update/${req.body.taskId}`)
        })
    }
}