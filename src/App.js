import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import UserContext from "./context/user";
import useAuthListener from "./hooks/useAuthListener";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Signup} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
