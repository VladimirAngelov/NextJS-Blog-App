import Link from "next/link"
import { MagnifyIcon, MenuIcon } from "@icons/material"
import icons from "../../utils/icons"
import DropDown from "../burger-menu"
import {HeaderContainer, Navigation, Logo} from "./StyledHeader"
import { BurgerMenu } from "../burger-menu/StyledBurgerMenu"

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
      <HeaderContainer>
        <Navigation>
          <Logo>Premium <strong> CAR</strong></Logo>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="/article">Article</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/purchase">Purchase</Link>
          </div>
          <div className="search">
            <img src={icons.search} onClick={() => {
              const element = document.getElementById("search-container")

              if (element.style.display === "flex") {
                element.style.display = "none"
              } else {
                element.style.display = "flex"
              }
            }} alt="" />
          </div>
          <BurgerMenu onClick={showDropdownMenu}>
            <MenuIcon width={30} height={30} />
          </BurgerMenu>
        </Navigation>
        <div id="search-container" className="search-container">
          <input type="text" placeholder="Search ..." />
        </div>
        <DropDown />
      </HeaderContainer>
    </>
  )
}

export default Header