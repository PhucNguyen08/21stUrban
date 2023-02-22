import { MongoClient } from 'mongodb';

const ConnectUntils = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://phucnguyen:nguyen812@cluster0.tdamf2q.mongodb.net/Test'
  );
  const db = client.db();
  return { client, db };
};

export default ConnectUntils;
