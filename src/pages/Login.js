import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const Login = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isEmailValid = emailAddress.includes("@");
  const ispasswordValid = password.length > 6;
  const isInvalid = !isEmailValid || !ispasswordValid;

  const handleLogin = () => {};

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
        <p>form goes here</p>
      </div>
    </div>
  );
};

export default Login;
