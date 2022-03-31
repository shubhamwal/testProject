import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./src/graphql/graphql";
import { mongoose } from "mongoose";
const app = express();


mongoose.connect('mongodb://localhost:27017/adminBackup',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });


const server = new ApolloServer({
    schema,
    context: (req) => ({
        req: req.req,
        res: req.res,
    }),
});

server.start().then(res => {
  server.applyMiddleware({ app });
 });

  app.listen(3000, () => {
      console.log(`App listening on the port 3000`);
  });