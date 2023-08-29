import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { env } from 'node:process';
import ogImageRoute from './routes/og-image.js';
import debugRoute from './routes/debug.js';

dotenv.config();
const { PORT } = env;

const fastify = Fastify({ logger: true });
await fastify.register(cors, {
    // put your options here
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
});

fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' });
});

fastify.register(ogImageRoute);
fastify.register(debugRoute);

await fastify.listen({ port: parseInt(PORT, 10) || 54321 });
