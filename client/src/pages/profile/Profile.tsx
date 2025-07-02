import "./profile.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cover"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="profile"
          className="profilePic"
        />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="header">
            <div className="center">
              <span>Jane Doe</span>
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

        <Posts />
      </div>
    </div>
  );
};

export default Profile;
