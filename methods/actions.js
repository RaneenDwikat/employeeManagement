const Task = require('../models/task')
const Users = require('../models/user')
const res = require('express/lib/response')
const { json } = require('body-parser')
var functions = {
    adduser: function (req, res) {
        var newuser = Users({
            name: req.body.name,
            salary: req.body.salary,
            //  tasks: [20,30,80],
        })
        newuser.save(function (err, newuser) {
            if (err) {
                console.log(err)
                res.status(400).send({ success: false })
            }
            else {
                console.log(newuser._id)

                res.status(200).send({ success: true })

            }
        })
    },

    getusers: function (req, res) {
        var cancelled = []
        var completed = []
        var pending = []
        Users.findOne({ _id: req.params._id }, (error, data) => {
            if (error) throw error;
            console.log(data.tasks)
            Task.find((err, result) => {
                if (error) {
                    return res.json({ success: false })
                } else {
                    result.forEach((element) => {
                        data.tasks.forEach((task) => {
                            if (element._id == task) {
                                if (element.status == 'cancelled') {
                                    cancelled.push(JSON.stringify({ _id: element._id, title: element.title, description: element.description, status: element.status }))
                                } else if (element.status == 'completed') {
                                    completed.push(JSON.stringify({ _id: element._id, title: element.title, description: element.description, status: element.status }))
                                } else if (element.status == 'pending') {
                                    pending.push(JSON.stringify({ _id: element._id, title: element.title, description: element.description, status: element.status }))
                                }
                            }
                        })
                    })
                    return res.json({ name: data.name, salary: data.salary, tasks: [{ status: 'cancelled', tasks: cancelled }, { status: 'completed', tasks: completed }, { status: 'pending', tasks: pending }] })
                }
            })
        })
    },

    deleteUser: function (req, res) {

        Users.findByIdAndDelete({ _id: req.params._id }, (error) => {
            if (error) {
                return res.json({ success: false, error: error })
            } else {
                return res.send({ status: "deleted" });
            }
        })
    },
    updateUser: function (req, res) {

        Users.findByIdAndUpdate({ _id: req.params._id }, { name: req.body.name, salary: req.body.salary }, (error) => {
            if (error) {
                return res.json({ success: false, error: error })
            } else {
                return res.send({ status: "updated" });
            }
        })
    },
    addTask: function (req, res) {

        Users.findByIdAndUpdate({ _id: req.params._id }, { $push: { tasks: req.body.tasks } }, (error) => {
            if (error) {
                return res.json({ success: false, error: error })
            } else {
                return res.send({ status: "added new task" });
            }
        })
    },
    removeTask: function (req, res) {

        Users.findByIdAndUpdate({ _id: req.params._id }, { $pull: { tasks: req.body.tasks } }, (error) => {
            if (error) {
                return res.json({ success: false, error: error })
            } else {
                return res.send({ status: "remove task" });
            }
        })
    },
    updateTask: function (req, res) {
        Task.findByIdAndUpdate({ _id: req.params._id }, { title: req.body.title, description: req.body.description, status: req.body.status }, (error) => {
            if (error) {
                return res.json({ success: false, error: error })
            } else {
                return res.send({ status: "updated" });
            }
        })
    }

}
module.exports = functions