import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable");
}

// Define a type for our cached connection object
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend global type so TS doesn’t complain
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "dealhunt",
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  global.mongooseCache = cached;

  return cached.conn;
}
