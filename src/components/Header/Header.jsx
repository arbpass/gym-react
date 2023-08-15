import React, { useRef, useEffect } from 'react';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';

const nav_links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#schedule',
        display: 'Schedule'
    },
    {
        path: '#classes',
        display: 'Classes'
    },
    {
        path: '#pricing',
        display: 'Pricing'
    },
]

const Header = () => {
    const headerRef = useRef(null);
    const headerFunc = ()=> {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
        {
            headerRef.current.classList.add('sticky_header');
        }
        else{
            headerRef.current.classList.remove('sticky_header');
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", headerFunc);
        return () => window.removeEventListener("scroll", headerFunc);
    }, []);

    const handleClick = e=> {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        })
    }


    return (
        <>
            <header className='header' ref={headerRef}>
                <div className='container'>
                    <div className='nav_wrapper'>
                        {/* ==========LOGO========== */}
                        <div className='logo'>
                            <div className='logo_img'>
                                <img src={logo} alt='' />
                            </div>
                            <h2>FitBody</h2>
                        </div>

                        {/* ==========Navbar========== */}
                        <div className='navigation'>
                            <ul className='menu'>
                                {
                                    nav_links.map(item => (
                                        <li className='nav_item'><a onClick={handleClick} href={item.path}>{item.display}</a></li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* ==========Nav right========== */}
                        <div className='nav_right'>
                            <button className='register_btn'>Register</button>
                            <span className='mobile_menu'><i class="ri-menu-line"></i></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header