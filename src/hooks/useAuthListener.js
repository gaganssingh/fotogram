import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";

const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authenticatedUser) => {
      if (authenticatedUser) {
        // If the user is authenticated positively
        // store user in browser local storage
        localStorage.setItem("authUser", JSON.stringify(authenticatedUser));
        setUser(authenticatedUser);
      } else {
        // if no authenticated user, clear the local storage
        // do that users from any previous sessions are also cleared
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    // Cleanup
    return () => listener();
  }, [firebase]);

  // Returned from this custom hook
  return { user };
};

export default useAuthListener;
