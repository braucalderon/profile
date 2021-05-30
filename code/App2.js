import React, { Suspense, useState } from "react";
import Showcase from "./showcase/Showcase";
import { Route, Switch } from "react-router-dom";

const AsyncProjects = React.lazy(() => import("./projects/Projectsshow.js"));
const AsyncResume = React.lazy(() => import('./resume/Resumeshow.js'));
const AsyncBio = React.lazy(() => import('./about/Aboutshow.js'));

const App2 = (props) => {
  const [state, setState] = useState(true);

  return (
    <React.Fragment>
      <Switch>
        {state ? (
          <Route
            path="/projectsshow"
            render={() => (
              <Suspense
                fallback={
                  <div style={{ textAlign: "center" }}>Loading ....</div>
                }
              >
                <AsyncProjects />
              </Suspense>
            )}
          />
        ) : null}
        {state ? (
          <Route
            path="/aboutmeshow"
            render={() => (
              <Suspense
                fallback={
                  <div style={{ textAlign: "center" }}>Loading ....</div>
                }
              >
                <AsyncBio />
              </Suspense>
            )}
          />
        ) : null}

        {state ? (
          <Route
            path="/resumeshow"
            render={() => (
              <Suspense
                fallback={
                  <div style={{ textAlign: "center" }}>Loading ....</div>
                }
              >
                <AsyncResume />
              </Suspense>
            )}
          />
        ) : null}

        <Route path="/" exact component={Showcase} />
      </Switch>
    </React.Fragment>
  );
};
export default App2;
