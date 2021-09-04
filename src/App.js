import React, { Fragment } from "react";
import Box from "./components/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./components/CreatePost";
import DeletePost from "./components/DeletePost";

const App = () => {
  return (
    <Fragment>
      <Router>
        <section>
          <ToastContainer />
          <main>
            <Switch>
              <Route path="/create-post" exact>
                <CreatePost />
              </Route>
              <Route path="/" exact>
                <Box />
              </Route>
              <Route path="/delete-post" exact>
                <DeletePost />
              </Route>
            </Switch>
          </main>
        </section>
      </Router>
    </Fragment>
  );
};
export default App;
