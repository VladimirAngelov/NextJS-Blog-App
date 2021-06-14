import style from "./styles/style.module.css"

const Tags = () => {
  const tags = ["Business", "Freelance", "Money", "Experience",
    "Lifestyle", "SEO", "Wordpress", "Marketing", "UX", "Modern",
    "Success", "Nature", "Productivity", "Sales page",
    "Sell", "Teamwork", "Monetize"]
  const data = tags.map(x => (<div key={x} className={style.tag}>{x}</div>))
  return (
    <>
      <h2 className={style['tag-title']}>Tags</h2>
      <div className={style.tags}>
        {data}
      </div>
    </>
  )
}

export default Tags