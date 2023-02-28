import mongoose, { ConnectOptions } from 'mongoose';

const options = { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions

mongoose.set('strictQuery', false);

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ID}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`

mongoose.connect(uri, options)
  .then(() => console.log('Connected to MongoDB.'))
  .catch(error => console.error(error));