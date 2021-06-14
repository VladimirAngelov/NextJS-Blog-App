import style from "./styles/style.module.css"
import { useEffect, useState } from "react"

const Buttons = ({ buttonCount, currentPage, setCurrentPage }) => {
  const buttons = []

  useEffect(() => {
    Array.from(document.getElementsByClassName("page-button"))
      .forEach(x => {
        x.style.background = "#fff"
        x.style.color = "#000"
        if (Number(x.innerHTML) === currentPage) {
          x.style.background = "#000"
          x.style.color = "#fff"
        }
      })
  }, [currentPage])


  for (let i = 1; i <= buttonCount; i++) {
    buttons.push(i)

    // if (i === buttonCount - 1) {
    //     buttons.push('...')
    // }
  }
  console.log(currentPage)
  const onButtonClick = (e) => {
    setCurrentPage(+e.target.innerHTML)
    // document.documentElement.scrollTop = 800;

  }

  return (
    <div className={style.buttons}>
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>{"<"}</button>
      {currentPage >= buttonCount - 3 && <button className="page-button" onClick={onButtonClick}>1</button>}
      {currentPage >= 3 && <button className="page-button" disabled={true} onClick={onButtonClick}>{"..."}</button>}

      {buttons.slice(0, buttonCount - 1)
        .slice(currentPage <= buttonCount - 3 ? currentPage - 1 : buttonCount - 3, currentPage + 2)
        .map(x => <button className="page-button" onClick={onButtonClick}>{x}</button>)}
      {currentPage < buttonCount - 3 &&
      <button className="page-button" disabled={true} onClick={onButtonClick}>{"..."}</button>}
      <button className="page-button" onClick={onButtonClick}>{buttonCount}</button>
      <button disabled={currentPage === buttonCount}
              onClick={() => setCurrentPage(prev => prev + 1)}>{">"}</button>
    </div>
  )
}

export default Buttons