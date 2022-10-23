const Task = require("../models/task");
const Users = require("../models/user");
const res = require("express/lib/response");
const Admins=require('../models/admin')


exports.addUser = async (req, res, next) => {
  const { name, salary } = req.body;
  try {
    await Users({ name, salary }).save();
    return res.status(201).json({ success: true, msg: "done" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

exports.updateUser = async (req, res, next) => {
  const { name, salary } = req.body;
  const { _id } = req.params;
  try {
    await Users.findByIdAndUpdate({ _id }, { name, salary });
    return res.status(200).send({ success: true, msg: "updated" });
  } catch (error) {
    return res.json({ success: false, error: error });
  }
};

exports.deleteUser = async (req, res, next) => {
  const { _id } = req.params;
  try {
    const user = await Users.findOne({ _id }).deleteOne();

    if (user) {
      await Task.deleteMany({ owner: _id });
      return res.status(200).send({ success: true, msg: "deleted" });
    } else res.status(400).send({ success: false, msg: "User not exist" });
    
  } catch (error) {
    return res.json({ success: false, error: error });
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const data = await Users.aggregate([
      {
        $lookup: {
          from: "tasks",
          // let:{_id:"$status"},
          pipeline: [
            { $project: { owner: 0, updatedAt: 0, __v: 0, createdAt: 0 } },
            {
              $group: {
                _id: "$status",
                tasks: {
                  $push: {
                    _id: "$_id",
                    title: "$title",
                    description: "$description",
                    status: "$status",
                  },
                },
              },
            },
            //* rename _id to status
            {
              $project: {
                _id: 0,
                status: "$_id",
                tasks: 1,
              },
            },
          ],
          localField: "_id",
          foreignField: "owner",
          as: "tasks",
        },
      },
    ]).project({ __v: 0 });
    return res.status(200).send({ data: data });
  } catch (error) {}
};
