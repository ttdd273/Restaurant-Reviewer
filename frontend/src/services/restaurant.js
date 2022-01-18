// we will make a module called axios to get the html stuff
import http from "../https-common.js";
// we will make all the functions that have the api calls

class RestaurantDataService {
  // http GET request to get information
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }
  //   getting a specific restaurant by id
  get(id) {
    return http.get(`/id/${id}`);
  }
  // find by the cuisine, zipcode, what you're searching by, and the page number
  find(query, by = "cuisine", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }
  //
  createReview(data) {
    return http.post("/review", data);
  }

  updateReview(data) {
    return http.put("/review", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review?id=${id}`, { data: { user_id: userId } });
  }

  getCuisines(id) {
    return http.get(`/cuisines`);
  }
}

export default new RestaurantDataService();
