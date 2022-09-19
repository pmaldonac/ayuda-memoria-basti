import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {SidebarData} from '../data/SidebarData'
import '../styles/Navbar.css'
import {IconContext} from 'react-icons'


function Navbar(){
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
        <IconContext.Provider value = {{color: '#ffffff'}}>
            <div className='navbar'> 
                <FaIcons.FaBars className='menu-bars' onClick={showSidebar}/>
                <img style={{ maxWidth: '6%', marginLeft: '3rem', marginTop:5, backgroundColor: '#7FD8BE'}} src="https://i.ibb.co/W5gNV5w/logo.png"/>
            </div>
            </IconContext.Provider>
            <IconContext.Provider value = {{color: "#ffffff"}}>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className = 'nav-menu-items'>
                    {SidebarData.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span />
                                    {item.title}
                                    
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar