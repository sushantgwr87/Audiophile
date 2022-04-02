import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useBreakpoints from '../customHook/useBreakpoints';
import styles from '../styles/navbar.module.css';
import Icon from '../Icon';
// import useMountTransition from '../customHook/useMountTransition';

const Navbar = () => {
    const { isMd } = useBreakpoints();

    const [showSidebar, setShowSidebar] = useState(false);

    // create a React ref for the sidebar element
    const sidebar = useRef(false);

    const closeNav = () => {
        setShowSidebar(false)
    }

    console.log(showSidebar)


    const handleClick = e => {
        if (sidebar.current.contains(e.target)) {
            // inside click
            return;
        }
        setShowSidebar(false);
        // outside click
    };

    useEffect(() => {
        // only add the event listener when the sidebar is opened
        if (!showSidebar) return;
        if (showSidebar)
            document.addEventListener("click", handleClick, true);
        // clean up
        return () => document.removeEventListener("click", handleClick, true);
    }, [showSidebar]);

    return (
        <header>
            <nav>
                {isMd ?
                    (
                        <>
                            <Link to="/">
                                <Icon name="AudioName" width={150} fill="white" />
                            </Link>
                            <div className={styles.nav_desktop}>
                                <ul>
                                    <Link to="/stories">Home</Link>
                                    <Link to="/features">Headphones</Link>
                                    <Link to="/pricing">Speakers</Link>
                                    <Link to="/pricing">Earphones</Link>
                                </ul>
                                {/* <button className={styles.nav_modal___btn}>Get an invite</button> */}
                                <Icon name="Cart" width={40} />
                            </div>
                        </>
                    )
                    :
                    <>
                        <div ref={sidebar}>
                            <div className={showSidebar ? styles.nav_mobile_menu___btn_close : styles.nav_mobile_menu___btn_open} onClick={() => setShowSidebar(!showSidebar)}></div>
                            <div className={`${styles.nav_mobile} ${showSidebar ? styles.nav_mobile___show : styles.nav_mobile___hide}`}>
                                <ul>
                                    <li>
                                        <Link onClick={closeNav} to="/stories">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeNav} to="/features">
                                            Headphones
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeNav} to="/pricing">
                                            Speakers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeNav} to="/pricing">
                                            Earphones
                                        </Link>
                                    </li>
                                    <li>
                                        <button className={styles.nav_modal___btn}>Get an invite</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Link to="/">
                                Logo
                            </Link>
                        </div>
                        <div>
                            cart
                        </div>
                    </>
                }
            </nav>
        </header>
    );
};

export default Navbar;