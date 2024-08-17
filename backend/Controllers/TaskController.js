
const TaskModel = require('../Models/TaskModel')

const createTask = async (req,res)=>{
    const data = req.body 
    try{
        const model = new TaskModel(data);
        await model.save();
        res.status(201).json({message:'Task is created',success:true})
    }
    catch(err){
        res.status(500).json({message:'Failed to create task', success:false})
    }
}

const fetchAllTask = async (req, res) => {
  try {
    const data = await TaskModel.find({});
    res.status(201).json({ message: "All Tasks", success: true,data });
  } catch (err) {
    res.status(500).json({ message: "Failed to get All Task", success: false});
  }
};

const updateTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req);
    const bodydata = req.body;
    console.log("update data > ", id, bodydata);
    const obj = { $set: { ...bodydata } };
    const data = await TaskModel.findByIdAndUpdate(id, bodydata);
    res.status(200).json({ message: "Task Updated", success: true, data : data});
  } catch (err) {
    res.status(500).json({ message: "Failed to Update task", success: false });
  }
};

const deleteTaskId = async (req, res) => {
  try {
    const id = req.params.id;
    await TaskModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Task is Deleted", success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to Delete Task", success: false});
  }
};



module.exports = {
  createTask,
  fetchAllTask,
  updateTaskById,
  deleteTaskId
};