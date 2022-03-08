const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
// const ClientError = require('./client-error');
// const pg = require('pg');

// const db = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

const app = express();
const jsonMiddleware = express.json();

app.use(staticMiddleware);
app.use(jsonMiddleware);
app.use(errorMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port 3000`);
});
