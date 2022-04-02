import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useBreakpoints from '../customHook/useBreakpoints';
import styles from '../styles/navbar.module.css';
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
                                Logo
                            </Link>
                            <div className={styles.nav_desktop}>
                                <ul>
                                    <Link to="/stories">Stories</Link>
                                    <Link to="/features">Features</Link>
                                    <Link to="/pricing">Pricing</Link>
                                </ul>
                                <button className={styles.nav_modal___btn}>Get an invite</button>
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
                                        Stories
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={closeNav} to="/features">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={closeNav} to="/pricing">
                                        Home
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