import {Joi} from '@anytrack/joi';
import { Request, Response, NextFunction } from 'express';

export default function joiMiddleware(schema: Joi.ObjectSchema, location: 'body' | 'params' | 'query') {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[location]);
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        next();
    };
}
