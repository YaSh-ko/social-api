import Event from "../event/event";
import "./events.scss";

const Events = () => {
  //TEMPORARY
  const events = [
    {
      id: 1,
      userName: "John Doe",
      name: "IT пикник",
      type: "IT мероприятие",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: new Date(2025, 7, 6, 21, 0, 0),
      address: "Moscow, Tower Street",
      img: "https://avatars.mds.yandex.net/i?id=23ce4572bf0b3017e0e935b62eb6e3f0_l-10933600-images-thumbs&n=13?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      userName: "John Doe",
      name: "IT пикник",
      type: "IT мероприятие",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: new Date(2025, 7, 6, 21, 0, 0),
        address: "Moscow, Tower Street",
        desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {events.map(event=>(
      <Event event={event} key={event.id}/>
    ))}
  </div>;
};

export default Events;