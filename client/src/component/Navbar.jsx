import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useBreakpoints from '../customHook/useBreakpoints';
import styles from '../styles/navbar.module.css';
import Icon from '../Icon';
import CartModal from './CartModal';
// import useMountTransition from '../customHook/useMountTransition';

const Navbar = () => {
    const { isMd } = useBreakpoints();

    const [showSidebar, setShowSidebar] = useState(false);

    const [modalShow, setModalShow] = useState(false);

    // create a React ref for the sidebar element
    const sidebar = useRef(false);

    const handleModalNav = () => {
        setModalShow(true);
    }

    const closeNav = () => {
        setShowSidebar(false)
    }

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
        <>
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
                                    <Link to="/">Home</Link>
                                    <Link to="/headphones">Headphones</Link>
                                    <Link to="/speakers">Speakers</Link>
                                    <Link to="/earphones">Earphones</Link>
                                </ul>
                                <button onClick={handleModalNav}><Icon name="Cart" width={25} fill="#e0e0e0" className="icon_hover" /></button>
                            </div>
                        </>
                    )
                    :
                    <>
                        <div style={{ top: 8, position: "absolute" }} ref={sidebar}>
                            <div className={showSidebar ? styles.nav_mobile_menu___btn_close : styles.nav_mobile_menu___btn_open} onClick={() => setShowSidebar(!showSidebar)}></div>
                            <div className={`${styles.nav_mobile} ${showSidebar ? styles.nav_mobile___show : styles.nav_mobile___hide}`}>
                                <ul>
                                    <li>
                                        <Link onClick={closeNav} to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeNav} to="/headphones">
                                            Headphones
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeNav} to="/speakers">
                                            Speakers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeNav} to="/earphones">
                                            Earphones
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.nav_mobile_logo}>
                            <Link to="/">
                                <Icon name="AudioName" width={150} fill="white" />
                            </Link>
                        </div>
                        <button onClick={handleModalNav}><Icon name="Cart" width={25} fill="#e0e0e0" className="icon_hover" /></button>
                    </>
                }
            </nav>
        </header>
                <CartModal onClose={() => setModalShow(false)} show={modalShow} />
        </>
    );
};

export default Navbar;