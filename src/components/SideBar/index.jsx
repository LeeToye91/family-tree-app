import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon:   <FontAwesomeIcon icon={faHome} />,
        to: '/dashboard',
        section: 'dashboard'
    },
    {
        display: 'User',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Settings',
        icon: <FontAwesomeIcon icon={faCog} />,
        to: '/settings',
        section: 'settings'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar-menu-item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar background-quat'>
        <div className="sidebar-logo">
            Family Tree App
        </div>
        <div ref={sidebarRef} className="sidebar-menu">
            <div
                ref={indicatorRef}
                className="sidebar-menu-indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar-menu-item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar-menu-item-icon">
                                {item.icon}
                            </div>
                            <div className="sidebar-menu-item-text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;