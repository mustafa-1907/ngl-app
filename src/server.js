import http from 'node:http'
import {createApp} from './app.js'
import mongoose from "mongoose";
import {env} from "./lib/config/env.js";

const app = createApp()
const server = http.createServer(app);

server.listen(env.port, () => {
    console.log(`Server listening on port ${env.port}`);
})
const shutDown = () => {
    server.close(async () => {
        await mongoose.disconnect();
        process.exit(0);
    })
}
server.on('SIGINT', shutDown);
server.on('SIGTERM', shutDown);