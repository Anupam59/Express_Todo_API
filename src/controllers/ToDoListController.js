const ToDoListModel = require("../models/ToDoListModel");

exports.CreateTodo =(req,res)=> {
    let reqBody = req.body;
    let UserName = req.headers["username"];
    let TodoSubject = reqBody["TodoSubject"];
    let TodoDes = reqBody["TodoDes"];
    let TodoStatus = "New";
    let TodoCreatDate = Date.now();
    let TodoUpdateDate = Date.now();

    let PostBody = {
        UserName:UserName,
        TodoSubject:TodoSubject,
        TodoDes:TodoDes,
        TodoStatus:TodoStatus,
        TodoCreatDate:TodoCreatDate,
        TodoUpdateDate:TodoUpdateDate,
    }

    ToDoListModel.create(PostBody,(error,data)=>{
        if (error){
            res.status(400).json({status:"Fail",data:error});
        }else {
            res.status(200).json({status:"success",data:data});
        }
    })
}

exports.SelectTodo=(req,res)=>{
    let UserName=req.headers['username'];
    ToDoListModel.find({UserName:UserName},(error,data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateTodo=(req,res)=>{

    let reqBody = req.body;

    let _id = reqBody["_id"];
    let TodoSubject = reqBody["TodoSubject"];
    let TodoDes = reqBody["TodoDes"];
    let TodoUpdateDate = Date.now();

    let PostBody = {
        TodoSubject:TodoSubject,
        TodoDes:TodoDes,
        TodoUpdateDate:TodoUpdateDate,
    }

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(error,data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateStatusTodo=(req,res)=>{

    let reqBody = req.body;

    let _id = reqBody["_id"];
    let TodoStatus = reqBody["TodoStatus"];
    let TodoUpdateDate = Date.now();

    let PostBody = {
        TodoStatus:TodoStatus,
        TodoUpdateDate:TodoUpdateDate,
    }

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(error,data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.RemoveTodo=(req,res)=>{

    let reqBody = req.body;
    let _id = reqBody["_id"];

    ToDoListModel.remove({_id:_id},(error,data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.SelectTodoStatus=(req,res)=>{

    let reqBody = req.body;
    let TodoStatus = reqBody["TodoStatus"];
    let UserName=req.headers['username'];

    ToDoListModel.find({UserName:UserName,TodoStatus:TodoStatus},(error,data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.SelectTodoByDate=(req,res)=>{

    let FormDate = req.body["FormDate"];
    let ToDate = req.body["ToDate"];
    let UserName=req.headers['username'];

    ToDoListModel.find({UserName:UserName,TodoUpdateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}},(error,data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}
