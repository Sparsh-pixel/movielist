import React from 'react';
import './index';
import styles from "./Navbar.module.css";




function Navbar (props) {
    
        const {cartCount} = props;
        return(
            <>
            <div className={styles.nav}>
                <div className={styles.title}> MovieFlix</div>
                <div className={styles.cartIconContainer}>
                    <img className={styles.cartIcon}  alt='cart-icon' src='https://cdn-icons-png.flaticon.com/128/1170/1170678.png'/>
                    <span className={styles.cartCount} color="yellow" show={true}>{cartCount}</span>
                </div>
            </div>

            </>
        )
    }


export default Navbar;