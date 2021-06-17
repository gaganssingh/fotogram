import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getUserObjByUserId = async () => {
      // Using the user id get user information from the firebase service
      const response = await getUserByUserId(user.uid);
      setActiveUser(response);
    };
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
};

export default useUser;
