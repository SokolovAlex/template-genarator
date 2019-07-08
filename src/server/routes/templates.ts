import { NextFunction, Request, Response, Router } from 'express';
import { uniq } from 'underscore';
import { getConnection } from '../../db';
import { Template } from '../../db/entity/template';

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
          'templates2params.parameter',
          'templates2params.parameter.templates2params',
          'templates2params.parameter.templates2params.template',
        ],
      });
      const disabledTemplates: Template[] = [];

      template.templates2params.forEach((t2p) => {
        const isOrdered = !!t2p.order;
        t2p.parameter.templates2params
          .forEach((linkedT2p) => {
            const linkedIsOrdered = !!linkedT2p.order;
            if (isOrdered !== linkedIsOrdered && linkedT2p.template.key !== templateKey) {
              disabledTemplates.push(linkedT2p.template);
            }
          });
      });

      const disabledTemplateKeys = disabledTemplates.map((disabledTemplate) => disabledTemplate.key);
      res.json({ template, disabledTemplateKeys: uniq(disabledTemplateKeys) });
    });

    router.get('/api/templates/parameters', async (req: Request, res: Response, next: NextFunction) => {
      const { templateKey } = req.query;
      const template: Template = await templateRepo.findOne(templateKey, {
        relations: ['templates2params', 'templates2params.parameter'],
      });
      res.json(template.templates2params.map((t2p) => t2p.parameter));
    });
  }
}
