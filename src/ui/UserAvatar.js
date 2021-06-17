import { Link } from "react-router-dom";
const UserAvatar = ({ user }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <Link to={`/p/${user.displayName}`}>
        <img
          src={`/images/avatars/${user.displayName}.jpg`}
          alt={`${user.displayName}`}
          className="rounded-full h-8 w-8 flex"
        />
      </Link>
    </div>
  );
};

export default UserAvatar;
