# 📏 Node.js Metrics Try-Out 📐

## About
Consists of a sample project using a Node.js/Express service that exposes data with [express-prom-bundle](https://github.com/jochen-schweizer/express-prom-bundle) (built on top of [prom-client](https://github.com/siimon/prom-client)). It also contains a **docker-compose** 🐋 file that deploys two other containers - a Prometheus server and a Grafana server -, so we can collect the service data and use it to generate dashboards and graphs.

## Deploying and testing the application
1. Create a directory named `grafana`
2. Give permissions to this directory `sudo chmod 744 grafana`
3. Build the application image using the Docker CLI:
```sh
npm run buildImage
```
4. Use docker-compose 🐋 to run the application and the Grafana and Prometheus servers:
```sh
docker-compose up
```
5. Access `http://localhost:3000` in your browser and log in to the Grafana console
6. Create a new Prometheus datasource using the following URL: `http://prometheus:9090`
7. Create a new dashboard and new panels using the Prometheus datasource to visualize the data exposed by the Node.js/Express application