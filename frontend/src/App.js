// we will be adding a lot of imports and getting rid of the old imports
import React from "react";
// creating different route pages
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import the stuff from components
import AddReview from "./components/add-review.js";
import Restaurant from "./components/restaurants.js";
import RestaurantsList from "./components/restaurants-list.js";
import Login from "./components/login.js";

function App() {
  // we will create a user state variable using a react hook
  const [user, setUser] = React.useState(null);

  // now, we create two async functions
  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }
  // we will just use a dummy login and logout system

  return (
    <div className="App">
      {/* this is the nav section */}
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              // if there is a user, we return this so they can logout
              <a
                onClick={logout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Logout {user.name}
              </a>
            ) : (
              // if there's no user, we will return this
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>
      {/* now we make the rest of the page with Routes statements*/}
      <div className="container mt-3">
        <Switch>
          {/* the first route is the main page with restaurant lists */}
          <Route
            exact
            path={["/", "/restaurants"]}
            component={RestaurantsList}
          />
          {/* the second route is add review */}
          <Route
            path="/restaurants/:id/review"
            render={(props) => <AddReview {...props} user={user} />}
          />
          <Route
            path="/restaurants/:id"
            render={(props) => <Restaurant {...props} user={user} />}
          />
          <Route
            path="/Login"
            render={(props) => <Login {...props} login={login} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
