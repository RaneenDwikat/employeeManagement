import users from '../model/user';
import tasks from '../model/task'
import  { NextFunction, Request,Response } from 'express';
import {redis} from '../utils/redis/connectRedis'




export default class usersController{

     async  addUser(req:Request,res:Response,next:NextFunction) {
        const {name,salary}=req.body;
        try {
        await new users({ name, salary }).save();
        return res.status(200).json({
            success: true,
            response: {msg:"Done" },
          });
      } catch (error) {
        return res;
      } 
    }

    async updateUser   (req:Request, res:Response, next:NextFunction)  {
        const { name, salary } = req.body;
        const { _id } = req.params;
        try {
          await users.findByIdAndUpdate({ _id }, { name, salary });
          return res.status(200).send({ success: true, msg: "updated" });
        } catch (error) {
          return res.json({ success: false, error: error });
        }
      }

      async deleteUser  (req:Request, res:Response, next:NextFunction) {
        const { _id } = req.params;
        try {
          const user = await users.findOne({ _id }).deleteOne();
      
          if (user) {
            await tasks.deleteMany({ owner: _id });
            return res.status(200).send({ success: true, msg: "deleted" });
          } else res.status(400).send({ success: false, msg: "User not exist" });
          
        } catch (error) {
          return res.json({ success: false, error: error });
        }
      };
      
      async getUsers (req:Request, res:Response, next:NextFunction) {
        try {
          

          const data = await users.aggregate([
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
          redis.setEx("users", 3600,JSON.stringify(data))
          return res.status(200).send({ data: data });
        } catch (error) {}
      };
      
}



