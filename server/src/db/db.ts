import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  console.log(process.env.MONGO_DB_URL);
  try {
    const res = await mongoose.connect(
      `${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`,
    );
    console.log(`Database sucessfully connected : `, res.connection.host);
  } catch (error) {
    console.log(error);
  }
};
