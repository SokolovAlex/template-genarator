import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './base';

export class PagesRoute extends BaseRoute {

  public static create(router: Router) {
    console.info('[PagesRoute::create] Creating index route.');

    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new PagesRoute().index(req, res, next);
    });
  }

  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {
    console.info('index route.');

    this.title = 'Home | Tour of Heros';

    const options: object = {
      message: 'Welcome to the Tour of Heros',
    };

    this.render(req, res, 'index', options);
  }
}
