const mongoose=require('mongoose')

var schemaTask=mongoose.Schema({
    title:String,
    description:String,
    status:String,
    due_date: Date,
    userId:String

})

var Task=mongoose.model('task',schemaTask)
var url = 'mongodb://127.0.0.1:27017/taskManagement';


exports.getAllTasks=()=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Task.find({})


        }).then(tasks=>{
            mongoose.disconnect()
            resolve(tasks)


        }).catch(err=>reject(err))
    })

}

exports.getThreeTasks=()=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Task.find({}).limit(3)


        }).then(tasks=>{
            mongoose.disconnect()
            resolve(tasks)


        }).catch(err=>reject(err))
    })


}

    
exports.postDataTaskModel=(title,description,status,due_date,userId)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            let task=new Task({
                title:title,
                description:description,
                status:status,
                due_date: due_date,
                userId:userId
            })
            return task.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added!!')
        }).catch((err)=>{
            mongoose.disconnect()
            console.log("nnnnnnok")
            reject(err)
        })
    })
}   


exports.getMyTasks=(userId)=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Task.find({userId:userId})


        }).then(tasks=>{
            mongoose.disconnect()
            resolve(tasks)


        }).catch(err=>reject(err))
    })

}


exports.deleteMyTask=(id)=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Task.deleteOne({_id:id})


        }).then(tasks=>{
            mongoose.disconnect()
            resolve(true)


        }).catch(err=>reject(err))
    })

}

exports.getUpdateTaskModel=(id)=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Task.findById(id)


        }).then(task=>{
            mongoose.disconnect()
            resolve(task)


        }).catch(err=>reject(err))
    })

}


exports.postUpdateTaskModel=(id,title,description,status,due_date,userId)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            return Task.updateOne({_id:id},{title:title,description:description,status:status,due_date:due_date,userId:userId})
        }).then(()=>{
            mongoose.disconnect()
            resolve('updated!!')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}