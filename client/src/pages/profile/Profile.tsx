import "./profile.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://avatars.mds.yandex.net/i?id=955e9cbb86ff12ba58bd97381bbbdb3e_l-9094097-images-thumbs&n=13"
          alt="cover"
          className="cover"
        />
        <img
          src="https://i.pinimg.com/550x/0b/95/78/0b9578233e45f403db499f11ab6357af.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="profile"
          className="profilePic"
        />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="header">
            <div className="center">
              <span>Кот Первый</span>
            </div>
            <div className="right">
              <MoreVertIcon />
            </div>
          </div>

          <div className="userDesc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
              omnis dolorum. Aliquam, voluptatum soluta in aperiam assumenda nemo hic ab.
            </p>
          </div>

          <div className="interests">
            <span className="tag">Бизнес</span>
            <span className="tag">ИТ</span>
          </div>

          <button className="addFriendBtn">Добавить в друзья</button>
        </div>

        <Posts userId={id} />
      </div>
    </div>
  );
};

export default Profile;
