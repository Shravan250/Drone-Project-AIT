import app from './app';
import { connectToDatabase } from './db/db';
import dotenv from 'dotenv';
// import 'dotenv/config';

dotenv.config();

const PORT = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on PORT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(
      `Some unexpected error has occured while connecting to DB : ${err}`,
    );
  });
