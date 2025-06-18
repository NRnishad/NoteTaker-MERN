import express from 'express';
const app = express();
app.get('/api/test', (req, res) => {
  res.status(200).send('Hello, World!');        
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


