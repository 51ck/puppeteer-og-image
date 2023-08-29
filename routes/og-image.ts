import { FastifyPluginCallback } from 'fastify';
import { template } from '../template.js';
import puppeteer from 'puppeteer';

const ogImageRoute: FastifyPluginCallback = (instance, options, next) => {
  instance.get('/og-image', async (req, reply) => {
		const { title, description } = req.query as any;

		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.setViewport({ width: 1200, height: 630 });
		await page.goto('data:text/html;charset=UTF-8,' + template({ title, description }), { waitUntil: 'networkidle2' });
		const image = await page.screenshot({ type: 'png' });

		reply.statusCode = 200;
		reply.header('Content-Type', `image/jpeg`);
		reply.header('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
		reply.header('Content-Length', image.byteLength);
		reply.type('image/png');
		reply.send(image);
  });
  next();
}

export default ogImageRoute;
