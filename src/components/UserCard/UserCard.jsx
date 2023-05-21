import css from "./UserCard.module.css";
import { Avatar } from "./Avatar/Avatar";
import { UserInfo } from "./UserInfo/UserInfo";
import { FollowButton } from "./FollowButton/FollowButton";
import { useFilter } from "../../hooks/useFilter";

export const UserCard = () => {
  const filtredUsers = useFilter();

  return filtredUsers?.map((user) => (
    <li className={css.card} key={user.id}>
      <div className={css.wrap}>
        <div className={css.decorationThumb}></div>
        <div className={css.line}>
          <Avatar src={user.avatar} alt={user.user} />
        </div>
        <div className={css.textBox}>
          <UserInfo tweets={user.tweets} followers={user.followers} />
          <FollowButton id={user.id} />
        </div>
      </div>
    </li>
  ));
};
