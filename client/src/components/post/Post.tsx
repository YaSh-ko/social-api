import './post.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../comments/Comments';

export interface PostType {
        id: number;
        name: string;
        userId: number;
        profilePic: string;
        desc: string;
        img?: string; 
    }

const Post = ({post} : {post: PostType} ) => {

    const [commentOpen, setCommentOpen] = useState(false);

    const isLiked = false;

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style = {{textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{post.name} </span>
                            </Link>
                            <span className="date">10 минут назад</span>
                        </div>
                    </div>
                    <MoreHorizIcon className="dots"/>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
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