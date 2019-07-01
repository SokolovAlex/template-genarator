import bodyParser from 'body-parser';
import express from 'express';
import es6Renderer from 'express-es6-template-engine';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig, { buildFolder } from '../client/webpack.config';
import { initDb } from '../db';
import { PagesRoute, TemplateRoute } from './routes';

const compiler = webpack(webpackConfig);

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  public start() {
    this.app.listen(3000, () => {
      console.info('App listening on port http//:localhost:3000');
    });
  }

  public async routes() {
    let router: express.Router;
    router = express.Router();
    PagesRoute.create(router);

    await TemplateRoute.create(router);

    this.app.use(router);
    this.app.use(webpackMiddleware(compiler, {
        noInfo: true,
        writeToDisk: true,
        stats: { colors: true },
    }));
  }

  private config() {
    this.app.use(express.static(buildFolder));
    this.app.engine('html', es6Renderer);
    this.app.set('view engine', 'html');
    this.app.set('views', buildFolder);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
  }
}

const server = new Server();

(async () => {
  await initDb();
  await server.routes();
  server.start();
})();
