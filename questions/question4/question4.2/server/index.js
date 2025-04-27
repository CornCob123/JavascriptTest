// server/index.js (SSR Server)
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  const appMarkup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script src="/client_bundle.js"></script>
      </body>
    </html>
  `;
  
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});