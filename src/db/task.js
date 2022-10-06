//description - String
//description - Boolean

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://mugarehema:Muga2013@cluster0.dssxgyw.mongodb.net/taskmanager"
);
const Task = mongoose.model("Task",{
decsription: String,
completed: Boolean

});
const task = new Task({
decsription: "shopping",
completed: "True"
});

task
.save()
.then(() => {
console.log(task);
})
.catch((error) => {
    console.log("Error",error);
})