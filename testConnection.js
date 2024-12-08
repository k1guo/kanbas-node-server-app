import mongoose from "mongoose";

async function testConnection() {
  try {
    await mongoose.connect("mongodb+srv://keying01152000:Aa001220GKYGKYGKY@kanbas.0m61h.mongodb.net/kanbas?retryWrites=true&w=majority&appName=Kanbas", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    mongoose.connection.close();
  }
}

testConnection();
