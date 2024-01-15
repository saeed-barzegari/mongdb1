const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://saeed:Ss12345678@cluster0.w8yt7i3.mongodb.net/?retryWrites=true&w=majority';


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectAndInsertSingle() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('your-database-name'); // Replace 'your-database-name' with your actual database name
    const collection = db.collection('posts');

    // Insert a single document
    const result = await collection.insertOne({
      title: "Post Title 1",
      body: "Body of post.",
      category: "News",
      likes: 1,
      tags: ["news", "events"],
      date: new Date()
    });

    console.log('Inserted Single Document:', result.insertedId);
  } finally {
    // Close the connection after the operation
    client.close();
    console.log('MongoDB connection closed');
  }
}

// Run the function to insert a single document
connectAndInsertSingle();