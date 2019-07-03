import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './base';

export class PagesRoute extends BaseRoute {

  public static create(router: Router) {
    console.info('[PagesRoute::create] Creating index route.');

    router.get(['/import', '/creation', '/'], (req: Request, res: Response, next: NextFunction) => {
      new PagesRoute().index(req, res, next);
    });
  }

  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {
    console.info('index route.');
    this.render(req, res, 'index');
  }
}
