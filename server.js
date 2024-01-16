const express= require('express')
const app=express()
const path=require('path')
const flash=require('connect-flash')


const RouterTask=require('./routers/task.router')
const RouterAuth=require('./routers/auth.router')
const RouteMyTasks=require('./routers/mytasks.router')
const session=require('express-session')
const MongoDbStore=require('connect-mongodb-session')(session)


app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')
app.use(flash())

var Store=new MongoDbStore({
    uri: 'mongodb://127.0.0.1:27017/taskManagement',
    collection: 'sessions'
})

app.use(session({
    secret:'this is my secret key azzzzzzezaeaze',
    store:Store,
    resave:true,
    saveUninitialized:true
}))



app.use('/tasks',RouterTask)
app.use('/',RouterAuth)
app.use('/mytasks',RouteMyTasks)



app.get('/about',(req,res,next)=>{
    res.render('about',{verifUser:req.session.userId})
})

app.get('/mytasks',(req,res,next)=>{
    res.render('mytasks',{verifUser:req.session.userId})
})


app.listen(3000,()=>console.log('server running'))