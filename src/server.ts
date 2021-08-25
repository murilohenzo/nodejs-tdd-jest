import app from './app';

app.listen(3000 || process.env.PORT, () => {
  console.log('🚀 Started server on port 3000');
});