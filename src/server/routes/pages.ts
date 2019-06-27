import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './base';

export class PagesRoute extends BaseRoute {

  public static create(router: Router) {

    console.log('[PagesRoute::create] Creating index route.');

    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new PagesRoute().index(req, res, next);
    });
  }

  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {

    console.log('index route.');

    this.title = 'Home | Tour of Heros';

    const options: Object = {
      message: 'Welcome to the Tour of Heros',
    };

    this.render(req, res, 'index', options);
  }
}
