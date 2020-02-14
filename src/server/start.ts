import * as config from 'config';
import * as express from 'express';
import routes from './routes';

console.log('Starting Server');

const app = express();

app.listen(config.get('port'));
app.use(`/${config.get('basePath')}`, routes);

console.log(`Server ${config.get('basePath')} Running on port ${config.get('port')}`);

