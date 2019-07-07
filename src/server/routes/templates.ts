import { NextFunction, Request, Response, Router } from 'express';
import { getConnection } from '../../db';
import { Template } from '../../db/entity/template';
import console = require('console');

export class TemplateRoute {
  public static async create(router: Router) {
    console.info('[TemplateRoute::create] Creating index route.');

    const connection = getConnection();
    const templateRepo = await connection.getRepository(Template);

    router.get('/api/templates', async (req: Request, res: Response, next: NextFunction) => {
      const templates: Template[] = await templateRepo.find({
        relations: ['templates2params', 'templates2params.parameter'],
      });
      res.json(templates);
    });

    router.get('/api/templates/conflicts', async (req: Request, res: Response, next: NextFunction) => {
      const { templateKey } = req.query;

      const template: Template = await templateRepo.findOne(templateKey, {
        relations: [
          'templates2params',
          'templates2params.template',
          'templates2params.template.templates2params',
          'templates2params.template.templates2params.predefinedValue',
          'templates2params.predefinedValue'
        ],
      });
        
      res.json(template);
    });

    router.get('/api/templates/parameters', async (req: Request, res: Response, next: NextFunction) => {
      const templateId = req.body.templateId;
      const template: Template = await templateRepo.findOne(templateId, {
        relations: ['templates2params', 'templates2params.parameter'],
      });
      res.json(template);
    });
  }
}
