const { MongoClient} = require('mongodb');
require('dotenv').config()

export const client = new MongoClient(process.env.MONGODB_URI);