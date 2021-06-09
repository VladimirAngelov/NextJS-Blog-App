import style from './styles/style.module.css'
import Link from "next/link";
import {MagnifyIcon, MenuIcon} from '@icons/material'

const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.navigation}>
                    <div className={style.logo}>Premium <strong> CAR</strong></div>
                    <div className={style.links}>
                        <Link href="/">Home</Link>
                        <Link href="/recipes">Recipes</Link>
                        <Link href="/article">Article</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/purchase">Purchase</Link>
                    </div>
                    <div className={style.search}>
                        <MagnifyIcon onClick={() => {
                            const element = document.getElementById('search-container')

                            if (element.style.display === 'flex') {
                                element.style.display = 'none'
                            } else {
                                element.style.display = 'flex';
                            }
                        }}/>
                    </div>
                    <div className={style['burger-menu']}>
                        <MenuIcon width={30} height={30}/>
                    </div>
                </div>
                <div id="search-container" className={style['search-container']}>
                    <input type="text" placeholder="Search ..."/>
                </div>
            </div>
        </>

    );
}

export default Header;