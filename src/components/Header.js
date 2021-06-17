import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import DashboardSVGButton from "../ui/DashboardSVGButton";
import SignoutSVGButton from "../ui/SignoutSVGButton";
import UserAvatar from "../ui/UserAvatar";

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  const userSignoutHandler = () => firebase.auth().signOut();

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center">
              <Link to={ROUTES.DASHBOARD} aria-label="Fotogram Logo">
                <img
                  src="/images/logo.png"
                  alt="Fotogram"
                  className="mt-2 w-3/12"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 flex items-center align-items cursor-pointer">
            {user ? (
              <>
                {/* If user is logged in then show these */}
                <DashboardSVGButton />
                <SignoutSVGButton onClick={userSignoutHandler} />
                <UserAvatar user={user} />
              </>
            ) : (
              <>
                {/* If user is not logged-in, then show these */}
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
