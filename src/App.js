// src/App.js

import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import ErrorBoundary from "./components/ErrorBoundary";
import NavBar from "./components/NavBar";


import { useAuth0 } from "./react-auth0-spa";

const Home = React.lazy(() => import("./components/Home")); 
const Profile = React.lazy(() => import("./components/Profile")); 

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
          <NavBar /> 
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </main>  
      </ErrorBoundary>
    </Router> 
    </div>
  );
}

export default App;