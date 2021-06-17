import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Login = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  // LOCAL STATE
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // FORM VALIDATION RULES
  const isEmailValid = emailAddress.includes("@");
  const ispasswordValid = password.length >= 6;
  const isInvalid = !isEmailValid || !ispasswordValid;

  const emailChangeHandler = (e) => setEmailAddress(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login | fotogram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="Fotogram app on the iPhone"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="fotogram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <Input
              type="email"
              focusOnPageLoad={true}
              ariaLabel="Enter your email address"
              placeholder="Email Address"
              customClasses="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              value={emailAddress}
              onChange={emailChangeHandler}
            />
            <Input
              type="Password"
              ariaLabel="Enter your password"
              placeholder="Password"
              customClasses="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              value={password}
              onChange={passwordChangeHandler}
            />
            <Button
              disabled={isInvalid}
              type="submit"
              customClasses={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Login
            </Button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full  bg-white rounded p-4 border border-gray-primary">
          <p className="text-sm">Don't have an account? </p>
          <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
