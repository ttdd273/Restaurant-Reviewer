import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();
// the root URL
// we need to edit it to use the controller file
// router.route("/").get((req, res) => res.send("hello world"));
router.route("/").get(RestaurantsCtrl.apiGetRestaurants);
// you will get all the reviews that are associated with that rest
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById);
// return a list of all the cuisines
// we want the user to be able to select the menu
// we will make a drop down menu on the frontend
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines);

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview);

export default router;
