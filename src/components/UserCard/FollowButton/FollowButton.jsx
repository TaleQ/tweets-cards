import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import css from "./FollowButton.module.css";
import { addFollower, removeFollower } from "../../../redux/operations";
import PropTypes from "prop-types";
import { useUsers } from "../../../hooks/useUsers";

export const FollowButton = ({ id }) => {
  const dispatch = useDispatch();
  const { followedUsers } = useUsers();
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    if (followedUsers.some((user) => user.id === id)) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  }, [followedUsers, id]);

  const handleClick = (e) => {
    isFollowed
      ? dispatch(removeFollower(e.target.id))
      : dispatch(addFollower(e.target.id));
  };

  return (
    <button
      className={isFollowed ? css.following : css.followBtn}
      type="button"
      id={id}
      onClick={handleClick}
    >
      {isFollowed ? "Following" : "Follow"}
    </button>
  );
};

FollowButton.propTypes = {
  id: PropTypes.string.isRequired,
};
