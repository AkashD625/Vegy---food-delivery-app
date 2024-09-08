import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://akashgd:locopilot625@cluster0.jpwku.mongodb.net/yourDatabaseName?retryWrites=true&w=majority';

    // Connect to MongoDB
    await mongoose.connect(uri);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
