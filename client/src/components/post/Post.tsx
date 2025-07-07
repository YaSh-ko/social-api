import './post.scss'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../comments/Comments';
import moment from 'moment'


export interface PostType {
        id: number;
        name: string;
        userId: number;
        userDesc: string;
        createdAt: string;
        profilePic: string;
        tags: string[];
        desc: string;
        img?: string; 
    }

const Post = ({post} : {post: PostType} ) => {

    const [commentOpen, setCommentOpen] = useState(false);
    const [now, setNow] = useState(moment());

    
    useEffect(() => {
    const interval = setInterval(() => {
        setNow(moment()); // обновляет компонент раз в минуту
    }, 60000);

    return () => clearInterval(interval);
    }, []);

    const isLiked = false;
    console.log("TAGS:", post.tags);
    console.log(typeof post.tags, post.tags);
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style = {{textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{post.name} </span>
                                <span className='useDesc'>{' ('} {post.userDesc} {' )'}</span>
                            </Link>
                            
                            <span className="date">{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <div className="rightHeader">
                        <div className="tags">
                            {(typeof post.tags === "string" ? JSON.parse(post.tags) : post.tags)?.map((tag: string, index: number) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                        <MoreHorizIcon className="dots"/>
                    </div>
                </div>
                    
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"./upload/"+post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {isLiked ? <FavoriteIcon style={{color: 'red', cursor: 'pointer'}}/> : <FavoriteBorderIcon style={{cursor: 'pointer'}}/>}
                        12 likes
                    </div>
                    <div className="item" onClick={()=>{setCommentOpen(!commentOpen)}}>
                        <ChatBubbleOutlineIcon  style={{cursor: 'pointer'}}/>
                        12 comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon style={{cursor: 'pointer'}}/>
                        12 shares
                    </div>
                </div>
                {commentOpen && <Comments/>}
            </div>
        </div>
    )
}

export default Post