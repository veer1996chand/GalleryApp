// src/App.js

import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import ErrorBoundary from "./components/ErrorBoundary";
import NavBar from "./components/NavBar";

import { useAuth0 } from "./react-auth0-spa";

const Home = React.lazy(() => import("./components/Home"));
const Profile = React.lazy(() => import("./components/Profile"));
const Users = React.lazy(() => import("./components/Users"));

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <ErrorBoundary>
          <Suspense fallback={/*<Loader />*/ <div>Loading...</div>}>
            <NavBar />
            <main>
              <Switch>
                <Route path="/" exact />
                <Route path="/profile" component={Profile} />
                <Route path="/users" component={Users} />
              </Switch>
            </main>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
