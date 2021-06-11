import style from "./styles/style.module.css"
import Link from "next/link"

const DropDown = () => {
  return (
    <div id="dropdown" className={style["dropdown-menu"]}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Recipes</Link>
        </li>
        <li>
          <Link href="/">Article</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">Purchase</Link>
        </li>
      </ul>
    </div>
  )
}

export default DropDown