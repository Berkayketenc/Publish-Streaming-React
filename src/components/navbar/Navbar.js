import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import  {BiUserCircle} from 'react-icons/bi';

import { IoSettingsOutline,IoNotificationsOutline, IoLogOutOutline }from 'react-icons/io5';

import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import {logoutUser} from "../../features/authentication/authSlice"
import {useDispatch,useSelector} from "react-redux"
import { Image} from "semantic-ui-react"



function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state)=>state.auth);

    const handleLogOut = ()=> {
        dispatch(logoutUser());


    };
    const trigger = (
        <span>
            <Image avatar src={currentUser.photoURL}/>
        </span>
    )
        localStorage.setItem("user", currentUser.displayName)
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>


                <div className='navbar'>

                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className="nav-item">
                        {/* <IoSettingsOutline className="settings"/> 
                        <IoNotificationsOutline className="noti"/> */}
                        <div class="dropdown">
                            <button className="dropbtn" icon={null} >{trigger}</button>
                            <div class="dropdown-content">
                                {/* <a key="user" text="Profil"><b><BiUserCircle/>Profil</b></a> */}
                                <a key="signout" text="Logout" onClick={()=> handleLogOut()}><b> <IoLogOutOutline className="logout"/>Logout</b></a>
                                
                            </div>
                        </div>
                    </div>

                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>

                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />


                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {

                            return (

                                <li key={index} className={item.cName}>

                                    <Link to={item.path}> {/*linteki pathı buradan alıyor*/}
                                        {item.icon}
                                        <span>{item.title}</span>


                                    </Link>
                                </li>
                            )
                        })}
                    </ul>


                </nav>


            </IconContext.Provider>
        </>
    );
}

export default Navbar;
