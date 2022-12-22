import express from 'express';
import bodyParser from 'body-parser';
import promBundle from 'express-prom-bundle';

const metricsMiddleware = promBundle({includeMethod: true});

export function server(routes, port = 3000) {
    const app = express();

    app.use(bodyParser.json())
    app.use(metricsMiddleware);

    for (const route of routes) {
        app.use(route);
    }

    console.log(`Starting server on port ${port}`);
    app.listen(port);
}