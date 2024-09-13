 import express from 'express';

 const  app = express();

 console.log('test');

 app.use('/api/test', (req, res) => {
    res.send('The API is working');
 });

 app.listen(8080,() => {
    console.log('Server is running on port 8080');
 });
