import { NextFunction, Request, Response, Router } from 'express';
import { getConnection } from '../../db';
import { Parameter } from '../../db/entity/parameter';

export class ParameterRoute {
  public static async create(router: Router) {
    console.info('[ParameterRoute::create] Creating index route.');

    const connection = getConnection();
    const paramRepo = await connection.getRepository(Parameter);

    router.get('/api/parameters', async (req: Request, res: Response, next: NextFunction) => {
      const params: Parameter[] = await paramRepo.find();
      res.json(params);
    });
  }
}
