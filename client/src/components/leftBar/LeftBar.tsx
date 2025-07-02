import './leftBar.scss'
import { Link } from "react-router-dom"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import EventIcon from '@mui/icons-material/Event';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {

    const { currentUser } = useContext(AuthContext);
    
    return (
        <div className="leftBar">
            <div className='container'>
                <div className="menu">
                    <div className="user">
                        <img src={currentUser?.imgUrl} alt="" />
                        <span>{currentUser?.name}</span>
                    </div>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <div className="item">
                            <EventIcon className='icon'/>
                            <span>Лента</span>
                        </div>
                    </Link>
                    <div className="item">
                        <PeopleAltIcon sx={{ fontSize: 30, width: 40}}/>
                        <span>Друзья</span>
                    </div>
                    <div className="item">
                        <MarkunreadIcon sx={{ fontSize: 30, width: 40}}/>
                        <span>Сообщения</span>
                    </div>
                    <div className="item">
                        <EventIcon sx={{ fontSize: 30, width: 40}}/>
                        <span>Мероприятия</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LeftBar;