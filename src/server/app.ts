import bodyParser from 'body-parser';
import express from 'express';
import es6Renderer from 'express-es6-template-engine';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../client/webpack.config';
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
      console.info('Example app listening on port 3000!');
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
        publicPath: undefined,
        stats: { colors: true },
    }));
    this.app.use(webpackMiddleware(compiler));
  }

  private config() {
    this.app.use(express.static(path.join(__dirname, 'public')));

    this.app.engine('html', es6Renderer);
    this.app.set('view engine', 'html');
    this.app.set('views', path.join(__dirname, 'views'));

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
