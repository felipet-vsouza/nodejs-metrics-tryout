import express from 'express';
import bodyParser from 'body-parser';

export function server(routes, port = 3000) {
    const app = express();

    app.use(bodyParser.json())

    for (const route of routes) {
        app.use(route);
    }

    console.log(`Starting server on port ${port}`);
    app.listen(port);
}