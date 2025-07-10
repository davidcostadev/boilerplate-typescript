import app from './server';

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

function main(): void {
  app.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} at http://localhost:${PORT}`);
  });
}

main();
