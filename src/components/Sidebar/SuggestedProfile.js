import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const SuggestedProfile = ({ userDocId, username, profileId, userId }) => {
  const [followed, setFollowed] = useState(false);

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          src={`/images/avatars/${username}.jpg`}
          alt={username}
          className="rounded-full w-8 flex mr-3"
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div>
        <Button
          type="button"
          customClasses="text-xs font-bold text-blue-medium"
          onClick={() => console.log("follow")}
        >
          Follow
        </Button>
      </div>
    </div>
  ) : null;
};

export default SuggestedProfile;
