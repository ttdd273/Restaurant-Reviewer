// connect to db and start server
import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";
dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  // the following attributes have been somewhat changed
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    // right after we connected to our data base
    // this will get our initial reference to the restaurants in the db
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);

    // how we start our web server
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
