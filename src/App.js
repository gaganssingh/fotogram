import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
