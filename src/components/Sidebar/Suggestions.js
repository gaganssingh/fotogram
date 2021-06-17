import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "./SuggestedProfile";

const Suggestions = ({ userId, following }) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    const fetchSuggestedProfiles = async () => {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    };

    if (userId) {
      fetchSuggestedProfiles();
    }
  }, [userId, following]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-grat-base">Other people you may like</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            userDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default Suggestions;
