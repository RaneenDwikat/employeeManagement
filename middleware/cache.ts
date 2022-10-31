import { NextFunction, Request, Response } from "express";
import { redis } from "../utils/redis/connectRedis";


export const getAndSetCache = async (
    key: string,
    cb: (e?: any) => any,
    expired?: number
  ) => {
    try {
      if (key) {
        const data = await redis.GET(key);
        return data;
      } else {
       if(expired){

        Promise.all([cb(), true])
        .then(async (result) => {
          const cb_data= result[0];
          await redis.setEx(key, expired, cb_data);
          return cb_data;
        })
        .catch((err) => console.error(err));
       }
      }
    } catch (error) {
      return error;
    }
  };