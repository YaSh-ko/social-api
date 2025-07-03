import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

     //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Кот Первый",
      img: "https://i.pinimg.com/550x/0b/95/78/0b9578233e45f403db499f11ab6357af.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Кот Второй",
      img: "https://i.pinimg.com/550x/0b/95/78/0b9578233e45f403db499f11ab6357af.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Кот Третий",
      img: "https://i.pinimg.com/550x/0b/95/78/0b9578233e45f403db499f11ab6357af.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Кот четвертый",
      img: "https://i.pinimg.com/550x/0b/95/78/0b9578233e45f403db499f11ab6357af.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];


    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser?.imgUrl} alt="" />
                <span>{currentUser?.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
                <div className="story" key = {story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories