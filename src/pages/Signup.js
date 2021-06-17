import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Signup = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  // LOCAL STATE
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // FORM VALIDATION RULES
  const isUsernameValid = username.trim().length >= 1;
  const isFullNameValid = fullName.trim().length >= 1;
  const isEmailValid = emailAddress.includes("@");
  const ispasswordValid = password.length >= 6;
  const isInvalid =
    !isUsernameValid || !isFullNameValid || !isEmailValid || !ispasswordValid;

  const usernameChangeHandler = (e) => setUsername(e.target.value);
  const fullNameChangeHandler = (e) => setFullName(e.target.value);
  const emailChangeHandler = (e) => setEmailAddress(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if username already exists
    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists) {
      // If username provided doesn't already exist,
      // allow user to signup
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // To create a new user, send
        // 1. username, email and password to firebase auth
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        // 2. All user info to firebase store
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.trim().toLowerCase(),
          fullName: fullName.trim(),
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setUsername("");
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      // If username already exist {
      setError("That username already exists, please try another one.");
    }
  };

  useEffect(() => {
    document.title = "Sign up | fotogram";
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

          <form onSubmit={handleSignup} method="POST">
            <Input
              type="text"
              focusOnPageLoad={true}
              ariaLabel="Enter a username"
              placeholder="Username"
              customClasses="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              value={username}
              onChange={usernameChangeHandler}
            />
            <Input
              type="text"
              ariaLabel="Enter your full name"
              placeholder="Full Name"
              customClasses="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              value={fullName}
              onChange={fullNameChangeHandler}
            />
            <Input
              type="email"
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
            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            <Button
              disabled={isInvalid}
              type="submit"
              customClasses={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Sign Up
            </Button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full  bg-white rounded p-4 border border-gray-primary">
          <p className="text-sm">Already have an account? </p>
          <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
