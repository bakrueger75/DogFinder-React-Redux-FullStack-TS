import routes from './routes';
import * as express from 'express';
import * as config from 'config';

const createApp = () => {
    const basePath = config.get('basePath'),
        app = express();

    app.use(basePath, routes);

    return app;
};

export const app = createApp();