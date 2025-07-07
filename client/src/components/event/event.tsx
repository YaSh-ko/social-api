import './event.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

export interface EventType {
        id: number;
        name: string;
        type: string;
        userId: number;
        userName: string;
        profilePic: string;
        desc: string;
        date: Date;
        address: string;
        img?: string; 
    }

const Event = ({event} : {event: EventType} ) => {

    const isLiked = false;

    return (
        <div className='event'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={event.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${event.userId}`} style = {{textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{event.userName} </span>
                            </Link>
                            <span className="date">10 минут назад</span>
                        </div>
                    </div>
                    <MoreHorizIcon className="dots"/>
                </div>
                <div className="content">
                    <div className="nameInfo">
                        <span className='eventName'>{event.name}</span>
                        <span className='eventType'> {" ("} {event.type} {") "}</span>
                    </div>
                    <img src={event.img} alt="" />
                    <p>{event.desc}</p>
                </div>
                <div className="info">

                    <div className='left'>
                        <div className="item">
                        {isLiked ? <FavoriteIcon style={{color: 'red', cursor: 'pointer'}}/> : <FavoriteBorderIcon style={{cursor: 'pointer'}}/>}
                        12 likes
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon style={{cursor: 'pointer'}}/>
                        12 shares
                    </div>
                    </div>
            
                    

                    <div className='right'>
                        <button className="checkUsersBtn">Участники</button>
                        <button className="signUpBtn">Записатсья</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event