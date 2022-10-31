import tasks from '../model/task'
import { NextFunction, Request, Response } from 'express';
import { redis } from '../utils/redis/connectRedis';
import { getAndSetCache } from '../middleware/cache'
import task from '../model/task';

export default class tasksController {

  updateTask = async (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.params;
    const { title, description, status, owner } = req.body;

    console.log(description);
    try {
      await tasks.findByIdAndUpdate(
        { _id },
        { title, description, status, owner }
      );
      return res.status(200).send({ success: true, msg: "updated" });
    } catch (error) {
      return res.json({ success: false, error: error });
    }
  };

  addTask = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, status, owner } = req.body;
    try {
      await new tasks({ title, description, status, owner }).save();
      return res.status(201).json({ success: true, msg: "added" });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error });
    }
  };

  removeTask = async function (req: Request, res: Response) {
    const { _id } = req.params;
    try {
      await tasks.findByIdAndDelete({ _id });
      return res.status(200).json({ success: true, msg: "deleted" });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error });
    }
  };
  getTask = async function (req: Request, res: Response, next: NextFunction) {
    const { _id } = req.params;
    try {
      const find =await task.findOne({_id})
     const data=await getAndSetCache(`task_${_id}`,()=>find,30)
     return res.status(200).json(data)
    } catch (error) {
      return res;
    }
  };
}