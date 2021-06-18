import { useState } from "react";
import { Link } from "react-router-dom";
import {
  updateFollowesListofFollowedUser,
  updateFollowingListOfLoggedInUser,
} from "../../services/firebase";
import Button from "../../ui/Button";

const SuggestedProfile = (props) => {
  const {
    suggestedProfileDocId,
    username,
    profileId,
    userId,
    loggedInUserDocId,
  } = props;
  const [followed, setFollowed] = useState(false);

  const followClickHandler = async () => {
    console.log("Clicked the follow button");
    setFollowed(true);

    // Update the following array of the logged in user
    await updateFollowingListOfLoggedInUser(
      loggedInUserDocId,
      profileId,
      false
    );

    // Update the followers array of the user being followed
    await updateFollowesListofFollowedUser(
      suggestedProfileDocId,
      userId,
      false
    );
  };

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
          onClick={followClickHandler}
        >
          Follow
        </Button>
      </div>
    </div>
  ) : null;
};

export default SuggestedProfile;
