const authModel=require('../models/auth.models')
const body=require('express').urlencoded({extended:true})



exports.getRegisterPage=(req,res,next)=>{
    res.render('register',{verifUser:req.session.userId})
}

exports.postRegisterData=(req,res,next)=>{
    authModel.registerFunctionModel(req.body.name,req.body.email,req.body.password).then((user)=>{
        res.redirect('/login')
    }).catch((err)=>{
        console.log(err)
        res.redirect('/register')
    })
    
}


exports.getLoginPage=(req,res,next)=>{
    res.render('login',{verifUser:req.session.userId})
}


exports.postLoginData=(req,res,next)=>{
    authModel.loginFunctionModel(req.body.email,req.body.password).then((id)=>{
        req.session.userId=id
        res.redirect('/tasks')
    }).catch((err)=>{
        console.log(err)
        res.redirect('/login')
    })
    
    
}


exports.logoutFunctionController=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('login')
    })
    
}