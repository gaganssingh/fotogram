import useUser from "../../hooks/useUser";
import User from "./User";
import Suggestions from "./Suggestions";

const Sidebar = () => {
  const {
    user: { userId, username, fullName },
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
};

export default Sidebar;