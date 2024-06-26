const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 
    "mongodb+srv://charan:12112573Bio@cluster0.gbtljzt.mongodb.net/<dbName>?appName=Cluster0";


let dbURL = uri;
dbURL = dbURL.replace("<username>", process.env.DB_USERNAME);
dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbName>", process.env.DB_NAME);
console.log(process.env.PORT)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// async function run() {
//   try {
//    const database = client.db(process.env.DB_NAME);
//    const products = database.collection("products");
//    const res = await products.insertOne({
//     name:"BIO",
//    });
//    console.log("------DB Connected------")
// }catch {
//     console.log("------Err------")   
// }
// }
// run();

const database = client.db(process.env.DB_NAME);
const productsCollection = database.collection("products");

module.exports = {
    database,
    productsCollection,
};
