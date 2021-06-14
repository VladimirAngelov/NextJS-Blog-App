import style from "./styles/style.module.css"
import Link from "next/link"
import { MagnifyIcon, MenuIcon } from "@icons/material"
import icons from '../../utils/icons'
import DropDown from "../burger-menu"

const Header = () => {
  const showDropdownMenu = () => {
    const menu = document.getElementById("dropdown")
    if (menu.style.display === "flex") {
      menu.style.display = "none"
    } else {
      menu.style.display = "flex"
    }
  }

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
            <img src={icons.search} onClick={() => {
              const element = document.getElementById("search-container")

              if (element.style.display === "flex") {
                element.style.display = "none"
              } else {
                element.style.display = "flex"
              }
            }} alt=""/>
          </div>
          <div onClick={showDropdownMenu} className={style["burger-menu"]}>
            <MenuIcon width={30} height={30} />
          </div>
        </div>
        <div id="search-container" className={style["search-container"]}>
          <input type="text" placeholder="Search ..." />
        </div>
        <DropDown />
      </div>
    </>
  )
}

export default Header