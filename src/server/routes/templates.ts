import { NextFunction, Request, Response, Router } from "express";

export class TemplateRoute {
  public index(req: Request, res: Response, next: NextFunction) {
    res.json({ templates: []});
  }

  public static create(router: Router) {

    console.log("[TemplateRoute::create] Creating index route.");

    router.get("/api/templates", (req: Request, res: Response, next: NextFunction) => {
      new TemplateRoute().index(req, res, next);
    });
  }
}