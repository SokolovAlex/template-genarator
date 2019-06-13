import bodyParser from "body-parser";
import express from "express";
import path from "path";
import es6Renderer from "express-es6-template-engine";

import { PagesRoute, TemplateRoute } from "./routes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.config();

    this.routes();
  }

  private config() {
    this.app.use(express.static(path.join(__dirname, "public")));
    
    this.app.engine('html', es6Renderer);
    this.app.set('view engine', 'html');
    this.app.set("views", path.join(__dirname, "views"));

    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
  }

  public start() {
    this.app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
  }

  private routes() {
    let router: express.Router;
    router = express.Router();
  
    PagesRoute.create(router);

    TemplateRoute.create(router);

    this.app.use(router);
  }
}

const server = new Server();

server.start();