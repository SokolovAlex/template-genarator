import { NextFunction, Request, Response, Router } from 'express';
import { getConnection } from '../../db';
import { Template } from '../../db/entity/template';

export class TemplateRoute {
  public static async create(router: Router) {
    console.log('[TemplateRoute::create] Creating index route.');

    const connection = getConnection();
    const templateRepo = await connection.getRepository(Template);

    router.get('/api/templates', async (req: Request, res: Response, next: NextFunction) => {
      const templates: Template[] = await templateRepo.find({
        relations: ["templates2params", "templates2params.parameter"]
      });
      res.json(templates);
    });
  }
}
