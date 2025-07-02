import './navbar.scss'
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className="left">
                <Link to='/' style={{textDecoration: "none"}}>
                    <span>My Social</span>
                </Link>
                
                <div className='icon-wrapper'>
                    <HomeOutlinedIcon className="icon icon-default"/>
                    <HomeIcon className="icon icon-hover"/>
                </div>
                <div className='icon-wrapper'>
                    <GridViewOutlinedIcon/>
                </div>
                <div className="icon-wrapper" onClick={toggle}>
                    {darkMode ? <BedtimeOutlinedIcon className="icon icon-default" /> : <WbSunnyOutlinedIcon className="icon icon-default"/>}
                    {darkMode ? <BedtimeIcon className="icon icon-hover" /> : <WbSunnyIcon className='icon icon-hover'/>}
                </div>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder='Поиск'/>
                </div>
            </div>
            <div className="right">
                <div className='icon-wrapper'>
                    <PersonOutlinedIcon className="icon icon-default"/>
                    <PersonIcon className="icon icon-hover"/>
                </div>
                <div className='icon-wrapper'>
                    <MailOutlinedIcon className="icon icon-default"/>
                    <MailIcon className="icon icon-hover"/>
                </div>
                <div className='icon-wrapper'>
                    <NotificationsNoneOutlinedIcon className="icon icon-default"/>
                    <NotificationsIcon className="icon icon-hover"/>
                </div>
                <div className="user">
                    <img src={currentUser?.imgUrl} alt="" />
                    <span>{ currentUser?.name }</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;