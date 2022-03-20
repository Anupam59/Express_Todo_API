const express = require("express");
const ProfileController = require("../controllers/ProfileController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const ToDoListController = require("../controllers/ToDoListController");

const router = express.Router();


router.post("/CreateProfile",ProfileController.CreateProfile);
router.post("/UserLogin",ProfileController.UserLogin);
router.get("/SelectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile);
router.post("/UpdateProfile",AuthVerifyMiddleware,ProfileController.UpdateProfile);



router.post("/CreateTodo",AuthVerifyMiddleware,ToDoListController.CreateTodo);
router.get("/SelectTodo",AuthVerifyMiddleware,ToDoListController.SelectTodo);
router.post("/UpdateTodo",AuthVerifyMiddleware,ToDoListController.UpdateTodo);
router.post("/UpdateStatusTodo",AuthVerifyMiddleware,ToDoListController.UpdateStatusTodo);
router.post("/RemoveTodo",AuthVerifyMiddleware,ToDoListController.RemoveTodo);

router.post("/SelectTodoStatus",AuthVerifyMiddleware,ToDoListController.SelectTodoStatus);
router.post("/SelectTodoByDate",AuthVerifyMiddleware,ToDoListController.SelectTodoByDate);

module.exports=router;
