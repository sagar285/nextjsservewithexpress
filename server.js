const express = require('express');
   const next = require('next');

   const dev = process.env.NODE_ENV !== 'production';
   const app = next({dev});
   const handle = app.getRequestHandler();

   app.prepare().then(() => {
     const server = express();

     // Custom routes can be added here
     server.get('/custom-route', (req, res) => {
       res.send('This is a custom route');
     });

     // Handle all other routes with Next.js
     server.all('*', (req, res) => {
       return handle(req, res);
     });

     const PORT = process.env.PORT || 5000;
     server.listen(PORT, (err) => {
       if (err) throw err;
       console.log(`> Ready on http://localhost:${PORT}`);
     });
   });


