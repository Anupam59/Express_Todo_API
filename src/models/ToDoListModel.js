const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDes:{type:String},
    TodoStatus:{type:String},
    TodoCreatDate:{type:Date},
    TodoUpdateDate:{type:Date},
},{versionKey:false});
const ToDoListModel = mongoose.model('todolist',DataSchema);
module.exports = ToDoListModel;
