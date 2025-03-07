
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../lib/jwt";

/**
 * An interface extending the standard Express `Request` interface to include
 * an optional `userId` property. This can be used to store the ID of the
 * authenticated user making the request.
 *
 * @interface CustomRequest
 * @extends {Request}
 * @property {string} [userId] - The ID of the authenticated user, if available.
 */
interface CustomRequest extends Request {  
  userId?: string;
}

export const userMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    const Header = req.headers["authorization"];
    const decoded = jwt.verify(Header as string, SECRET_KEY);
    if (decoded) {
      req.userId = (decoded as any).id;
      next();
    }
   
    else{
        res.status(403).json({
          message:"You are not logged in"
        })
    }
}