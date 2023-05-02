import Express from 'express';

const app = Express();

app.use((request, response) => {
  console.log('hola mundo...');
});

export default app;
