const Task = require("../models/task");
const Users = require("../models/user");
const res = require("express/lib/response");

exports.updateTask = async (req, res, next) => {
  const { _id } = req.params;
  const { title, description, status, owner } = req.body;
  console.log(_id);
  console.log(title);
  console.log(status);
  console.log(owner);
  console.log(description);
  try {
    await Task.findByIdAndUpdate(
      { _id },
      { title, description, status, owner }
    );
    return res.status(200).send({ success: true, msg: "updated" });
  } catch (error) {
    return res.json({ success: false, error: error });
  }
};

exports.addTask = async (req, res, next) => {
  const { title, description, status, owner } = req.body;
  try {
    await Task({ title, description, status, owner }).save();
    return res.status(201).json({ success: true, msg: "added" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

exports.removeTask = async function (req, res) {
  const { _id } = req.params;
  try {
    await Task.findByIdAndDelete({ _id });
    return res.status(200).json({ success: true, msg: "deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};
