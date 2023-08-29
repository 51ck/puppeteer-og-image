import { FastifyPluginCallback } from 'fastify';
import { template } from '../template.js';

const debugRoute: FastifyPluginCallback = (instance, options, next) => {
  instance.get('/debug', async (req, reply) => {
		const { title, description } = req.query as any;
		reply.statusCode = 200;
		reply.header('Content-Type', `text/html`);
		reply.type('text/html');
		reply.send(template({ title, description }));
  });
  next();
}

export default debugRoute;
