const serverless = require('serverless-http');
const express = require('express')
const { Nuxt } = require('nuxt-start')
const config = require('../nuxt.config.js')
config.render = { etag: true, compressor: { threshold: Infinity } };
config.dev = false;

const nuxt = new Nuxt(config);
const app = express();
app.use(nuxt.render);

const handler = serverless(app, {
  type: 'edge-origin-request',
  platform: 'aws'
});

module.exports.handler = async (event, context) => {
  await nuxt.ready();
  return await handler(event, context);
};
